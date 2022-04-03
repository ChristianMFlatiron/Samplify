class UserSerializer < ActiveModel::Serializer
  attributes :id, :profile_imageUrl,:username,:password_digest,:first_name, :last_name
  #has_many :instruments

  has_many :instruments, serializer: UserInstrumentsSerializer
end
