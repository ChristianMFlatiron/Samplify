class User < ApplicationRecord
    belongs_to :instrument
    has_many :band_owners
    has_many :bands, through: :band_owners
    has_secure_password
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
