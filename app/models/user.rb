class User < ApplicationRecord
    has_many :disciplines, dependent: :destroy
    has_many :instruments, dependent: :destroy
end
