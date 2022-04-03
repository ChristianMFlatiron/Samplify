class User < ApplicationRecord
    has_many :user_instruments
    has_many :instruments, through: :user_instruments  
    
    validates :username, uniqueness: true
    validates :username, presence: true

end
