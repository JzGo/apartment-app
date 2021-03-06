class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :postal_code
      t.string :state
      t.string :country
      t.string :contact_name
      t.string :contact_phone
      t.string :contact_hours

      t.timestamps
    end
  end
end
