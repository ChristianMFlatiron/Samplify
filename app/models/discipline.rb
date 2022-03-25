class Discipline < ApplicationRecord
    belongs_to :user, dependent: :destroy
end
