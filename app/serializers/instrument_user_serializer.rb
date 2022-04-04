class InstrumentUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_imageUrl, :first_name, :last_name
end
