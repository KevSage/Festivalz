class Artist < ApplicationRecord
    has_many :performances
    has_many :festivals, through: :performances
    has_many :follows
    has_many :users, through: :follows
end
