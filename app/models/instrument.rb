class Instrument < ApplicationRecord
    has_many :users, through: :users
end
