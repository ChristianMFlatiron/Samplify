class User < ApplicationRecord
    has_many :instruments 
    has_secure_password
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
