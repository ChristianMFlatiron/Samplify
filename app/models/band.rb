class Band < ApplicationRecord
    has_many :band_players
    has_many :users, through: :band_players
    belongs_to :user
end
