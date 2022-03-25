class CreateDisciplines < ActiveRecord::Migration[6.1]
  def change
    create_table :disciplines do |t|
      t.string :discipline_imageUrl
      t.string :discipline_name
      t.string :discipline_description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
