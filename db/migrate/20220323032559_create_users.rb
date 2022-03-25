class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :profile_imageUrl
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.has_many :disciplines
      t.has_many :instruments



      t.timestamps
    end
  end
end
