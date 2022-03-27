class Discipline < ApplicationRecord
    has_many :users, through: :users
end
