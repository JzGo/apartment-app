require 'rails_helper'

describe "Apartments API" do
  let(:user){ User.create name: 'Bob', email: 'bob@bobber.com', password: 'secret'}

  it "gets a list of Apartments" do
    Apartment.create(address_1: '123 where am i', city: 'someplace', postal_code: '12312', state: 'over here', country: 'where', contact_name: user.name, contact_phone: '123-123-1234',
    contact_hours: 'all the time', user_id: user.id)

    # Make a request to the API
    get '/apartments'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end
end
