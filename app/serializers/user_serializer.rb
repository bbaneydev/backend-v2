class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :cars
  has_many :favorites
  has_many :wishlists
end
