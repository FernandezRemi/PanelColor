class AddColorNumToPanel < ActiveRecord::Migration[5.0]
  def change
    add_column :panels, :colors_count, :integer, default: 4
  end
end
