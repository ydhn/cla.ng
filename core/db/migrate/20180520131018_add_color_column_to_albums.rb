class AddColorColumnToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :color, :string
  end
end
