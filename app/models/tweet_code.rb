class TweetCode < ApplicationRecord
  belongs_to :user

  def self.sort_tweet_item(params)
    hat_hash = {"hat_name" => params[:tweet_item_hat][2],"hat_image" => params[:tweet_item_hat][5],"hat_type" => params[:tweet_item_hat][3],"hat_class" => params[:tweet_item_hat][4]}
    tops_hash = {"tops_name" => params[:tweet_item_tops][2],"tops_image" => params[:tweet_item_tops][5],"tops_type" => params[:tweet_item_tops][3],"tops_class" => params[:tweet_item_tops][4]}
    pants_hash = {"pants_name" => params[:tweet_item_pants][2],"pants_image" => params[:tweet_item_pants][5],"pants_type" => params[:tweet_item_pants][3],"pants_class" => params[:tweet_item_pants][4]}
    shoes_hash = {"shoes_name" => params[:tweet_item_shoes][2],"shoes_image" => params[:tweet_item_shoes][5],"shoes_type" => params[:tweet_item_shoes][3],"shoes_class" => params[:tweet_item_shoes][4]}
    return hat_hash.merge(tops_hash).merge(pants_hash).merge(shoes_hash)
  end

end
