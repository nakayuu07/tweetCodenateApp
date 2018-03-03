class CreateWantClosets < ActiveRecord::Migration[5.1]
  def change
    create_table :want_closets do |t|
      t.string :maker
      t.text :title
      t.string :itemtype
      t.string :itemClass
      t.string :image
      t.integer :user_id
      t.timestamps
    end
  end
end
