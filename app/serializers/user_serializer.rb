class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_imageUrl,:username, :password_digest, :first_name, :last_name, :userdescription
end
