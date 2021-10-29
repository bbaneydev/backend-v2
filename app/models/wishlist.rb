class Wishlist < ApplicationRecord
    belongs_to :user
    belongs_to :car
    validates :car_id, uniqueness: true
end
