class User < ApplicationRecord
    has_many :artists
    has_many :follows, through: :artists
end
