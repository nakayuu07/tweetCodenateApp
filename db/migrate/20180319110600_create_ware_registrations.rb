class CreateWareRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :ware_registrations do |t|
      t.integer :user_id
      t.integer :wear_item_id
      t.timestamps
    end
  end
end
