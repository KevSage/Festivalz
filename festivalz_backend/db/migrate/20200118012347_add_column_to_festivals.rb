class AddColumnToFestivals < ActiveRecord::Migration[6.0]
  def change
    add_column :festivals, :image, :string
  end
end
