class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :instrument_imageUrl
      t.string :instrument_name
      t.string :instrument_description
      t.timestamps
    end
  end
end
