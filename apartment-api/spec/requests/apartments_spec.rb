require 'rails_helper'

describe "Apartments API" do
  let(:user){ User.create name: 'Bob', email: 'bob@bobber.com', password: 'secret'}

  it "gets a list of Apartments" do
    Apartment.create(address_1: '123 where am i', city: 'someplace', postal_code: '12312', state: 'over here', country: 'where', contact_name: user.name, contact_phone: '123-123-1234',
    contact_hours: 'all the time', user_id: user.id)

    get '/apartments'

    json = JSON.parse(response.body)

    expect(response).to be_success

    expect(json.length).to eq 1
  end

  it "creates an apartment" do

    apartment_params = {
      apartment: {
        address_1: '123 where am i',
        city: 'someplace',
        postal_code: '12312',
        state: 'over here',
        country: 'where',
        contact_name: user.name,
        contact_phone: '123-123-1234',
        contact_hours: 'all the time',
        user_id: user.id
      }
    }

    post '/apartments', params: apartment_params

    expect(response).to be_success

    new_apartment = Apartment.first

    expect(new_apartment.address_1).to eq('123 where am i')
  end
end
