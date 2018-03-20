class TweetCodesController < ApplicationController
  include CarrierwaveBase64Uploader

  def index
    @tweet_items = TweetCode.all
    @tweet_relation_user = @tweet_items.map { |n| n.user}
    render json: {tweet_items: @tweet_items, tweet_relation_user: @tweet_relation_user}
  end

  def create
    binding.pry
    code_image = base64_conversion(params[:params][:code_image])
    sorted_tweet_data = TweetCode.sort_tweet_item(tweet_params, params[:params][:code_image])
    sorted_tweet_data[:code_image] = code_image

    @tweet_item = current_user.tweet_codes.create(sorted_tweet_data)
    render json: @tweet_item
  end

  private
    def tweet_params
      #code_imageが取れない
      params.require(:params).permit(tweet_item_hat: [],
                                     tweet_item_tops: [],
                                     tweet_item_pants: [],
                                     tweet_item_shoes: [],
                                     )
    end
end
