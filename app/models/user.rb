class User < ApplicationRecord
    belongs_to :instrument
    has_many :band_players
    has_many :joined_bands, through: :band_players, source: "Band"
    has_many :bands
    has_secure_password
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
