class Festival < ApplicationRecord
    has_many :artists
    has_many :performances, through: :artists
end
