class CreateWearItems < ActiveRecord::Migration[5.1]
  def change
    create_table :wear_items do |t|
      t.string :maker
      t.text :title
      t.string :itemtype
      t.string :itemClass
      t.string :image
      t.timestamps
    end
  end
end
