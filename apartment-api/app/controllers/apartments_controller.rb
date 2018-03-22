class ApartmentsController < ApplicationController

  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
  end

  private

  def apartment_params
    params.require(:apartment).permit(:address_1, :address_2, :city, :postal_code, :state, :country, :contact_name, :contact_phone, :contact_hours, :user_id)
  end
end
