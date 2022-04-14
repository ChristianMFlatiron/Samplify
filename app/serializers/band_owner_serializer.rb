class BandOwnerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_id
end
