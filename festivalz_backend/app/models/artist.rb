class Artist < ApplicationRecord
    has_many :festivals
    has_many :performances, through: :festivals
end
