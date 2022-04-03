class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :instrument_imageUrl, :instrument_name,:instrument_description
  #has_many :users

  has_many :users, serializer: InstrumentUserSerializer
end
