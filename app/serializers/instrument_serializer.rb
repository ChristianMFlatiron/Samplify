class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :instrument_imageUrl, :instrument_name,:instrument_description, :user_id
  #has_many :users

  has_many :users
end
