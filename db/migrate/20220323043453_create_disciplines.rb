class CreateDisciplines < ActiveRecord::Migration[6.1]
  def change
    create_table :disciplines do |t|
      t.string :discipline_imageUrl
      t.string :discipline_name
      t.string :discipline_description

      t.timestamps
    end
  end
end
