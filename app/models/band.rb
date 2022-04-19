class Band < ApplicationRecord
    has_many :band_players
    has_many :users, through: :band_players
    belong_to :user
end
