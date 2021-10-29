class Wishlist < ApplicationRecord
    belongs_to :user
    belongs_to :car
    validates :user_id, uniqueness: true
end
