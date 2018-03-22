class AddOwnersToApartments < ActiveRecord::Migration[5.1]
  def change
    add_reference :apartments, :user, foreign_key: true
  end
end
