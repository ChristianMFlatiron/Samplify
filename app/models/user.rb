class User < ApplicationRecord
    has_secure_password

    has_many :disciplines
    has_many :instruments

    validates :username, presence: true, uniqueness: { case_sensitive: false }
    validates :password, length: {minimum: 6, maximum: 20}, if: -> {new_record? || !password.nil?}
end
