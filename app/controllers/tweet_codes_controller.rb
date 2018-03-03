class TweetCodesController < ApplicationController

  def index
    @tweet_items = TweetCode.all
    render json: @tweet_items
  end

  def create
    sorted_tweet_data = TweetCode.sort_tweet_item(tweet_params)
    @tweet_item = current_user.tweet_codes.create(sorted_tweet_data)
    render json: @tweet_item
  end

  private
    def tweet_params
      params.require(:params).permit(tweet_item_hat: [],
                                     tweet_item_tops: [],
                                     tweet_item_pants: [],
                                     tweet_item_shoes: [])
    end
end
