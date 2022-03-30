class AddUserDescriptionToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :user_description, :string
  end
end
