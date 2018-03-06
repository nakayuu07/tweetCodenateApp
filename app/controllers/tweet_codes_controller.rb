class TweetCodesController < ApplicationController
  include CarrierwaveBase64Uploader

  def index
    @tweet_items = TweetCode.all
    render json: @tweet_items
  end

  def create
    code_image = base64_conversion(params[:params][:code_image])
    sorted_tweet_data = TweetCode.sort_tweet_item(tweet_params, params[:params][:code_image])
    # code_image.headers = ''
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
