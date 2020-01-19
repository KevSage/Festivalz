class CreateFestivals < ActiveRecord::Migration[6.0]
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :region
      t.string :date
      t.integer :ticket_price

      t.timestamps
    end
  end
end
