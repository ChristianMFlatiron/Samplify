class User < ApplicationRecord
    belongs_to :instrument
    has_many :band_owners
    has_many :joined_bands, through: :band_owners, source: "Band"
    has_many :bands
    has_secure_password
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
