class User < ApplicationRecord
    belongs_to :instruments 
    has_secure_password
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
