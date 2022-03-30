class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_imageUrl,:username,:first_name, :last_name
end
