class User < ApplicationRecord
    has_many :follows, :dependent => :destroy
    has_many :artists, through: :follows
    has_many :reservations, :dependent => :destroy
    has_many :festivals, through: :reservations
end
