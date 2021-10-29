class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :car, serializer: CarSerializer
end
