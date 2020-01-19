class CreatePerformances < ActiveRecord::Migration[6.0]
  def change
    create_table :performances do |t|
      t.string :time
      t.references :festival, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
