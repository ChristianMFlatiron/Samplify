class User < ApplicationRecord
    belongs_to :discipline
    belongs_to :instrument
end
