class AddCodeImageToTweetCode < ActiveRecord::Migration[5.1]
  def change
    add_column :tweet_codes, :code_image, :text
  end
end
