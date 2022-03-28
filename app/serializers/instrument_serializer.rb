class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :instrument_imageUrl, :instrument_name,:instrument_description
end
