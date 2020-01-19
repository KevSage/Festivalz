class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :image
      t.string :bio
      t.string :genre
      t.string :spotify

      t.timestamps
    end
  end
end
