class Festival < ApplicationRecord
    has_many :performances
    has_many :artists, through: :performances
    has_many :reservations
    has_many :users, through: :reservations
end
