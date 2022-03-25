class Instrument < ApplicationRecord
    belongs_to :user, dependent: :destroy
end
