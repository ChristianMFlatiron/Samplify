class User < ApplicationRecord
    has_many :discipline
    has_many :instrument
end
