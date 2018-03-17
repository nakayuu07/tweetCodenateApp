class AddSelfinfoToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :selfinfo, :text
  end
end
