class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.integer :user_id


      t.timestamps
    end
  end
end
