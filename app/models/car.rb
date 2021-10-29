class Car < ApplicationRecord
    has_many :reviews
    has_many :favorites
    has_many :wishlists
    belongs_to :user
end
