class User < ApplicationRecord
    has_many :disciplines
    has_many :instruments
end
