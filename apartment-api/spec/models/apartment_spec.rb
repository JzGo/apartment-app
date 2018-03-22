require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user){ User.create name: 'Bob', email: 'bob@bobber.com', password: 'secret'}

  it "should validate name" do
    apartment = Apartment.create
    expect(apartment.errors[:address_1]).to_not be_empty
  end
end
