class CreateUnlikes < ActiveRecord::Migration[5.1]
  def change
    create_table :unlikes do |t|
      t.integer :user_id
      t.integer :tweet_code_id

      t.timestamps
      t.index :user_id
      t.index :tweet_code_id
      t.index [:user_id, :tweet_code_id], unique: true
    end
  end
end
