class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_imageUrl, :username, :password_digest, :first_name, :last_name, :instrument_id, :band
  

  belongs_to :instrument
end
