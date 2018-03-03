class CreateTweetCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :tweet_codes do |t|
      t.string :hat_name
      t.text   :hat_image
      t.string :hat_type
      t.string :hat_class

      t.string :tops_name
      t.text   :tops_image
      t.string :tops_type
      t.string :tops_class

      t.string :pants_name
      t.text   :pants_image
      t.string :pants_type
      t.string :pants_class

      t.string :shoes_name
      t.text   :shoes_image
      t.string :shoes_type
      t.string :shoes_class

      t.integer :user_id
      t.timestamps
    end
  end
end
