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

  it "doesn't create an apartment without a address" do
        apartment_params = {
          apartment: {
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

    # This is a new test to make sure that our status is correct when the record can't be created
    # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    expect(response.status).to eq 422

    # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['address_1']).to include "can't be blank"
  end
end
