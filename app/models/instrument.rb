class Instrument < ApplicationRecord
    has_many :users, dependent: :destroy
end
