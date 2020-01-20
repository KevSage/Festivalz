class User < ApplicationRecord
    has_many :follows
    has_many :artists, through: :follows
    has_many :reservations
    has_many :festivals, through: :reservations
end
