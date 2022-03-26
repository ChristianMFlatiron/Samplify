class Discipline < ApplicationRecord
    has_many :users, dependent: :destroy
end
