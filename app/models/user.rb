class User < ApplicationRecord
    has_many :cars
    has_many :reviews, through: :cars
    has_many :reviews

    has_secure_password
    # validates: username, presense: true
    # validates: username, uniqueness: true
end
