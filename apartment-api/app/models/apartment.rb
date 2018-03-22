class Apartment < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :address_1, presence: true
end
