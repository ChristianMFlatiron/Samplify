class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :instrument, :user_id, :genre
end
