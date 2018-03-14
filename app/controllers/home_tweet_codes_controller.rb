class HomeTweetCodesController < ApplicationController
  def index
    current_user_following = UserRelationship.where(follower_id: current_user.id)
    @show_tweet_data = []
    current_user_following.each do |following_user|
      tweet_codes = TweetCode.where(user_id: following_user[:followed_id])
      tweet_codes.each do |tweet_code|
        tweet_likes = tweet_code.likes.length
        tweet_unlikes = tweet_code.unlikes.length

        @show_tweet_data.concat([tweet_code])
      end
    end

    current_user.tweet_codes.each do |current_user_tweet|
      @show_tweet_data.concat([current_user_tweet])
    end

    @show_tweet_data = @show_tweet_data.sort_by(&:id).reverse

    @tweet_likes_data = []
    @show_tweet_data.each do |tweet_code|
      tweet_likes = tweet_code.likes.length
      tweet_unlikes = tweet_code.unlikes.length
      tweet_user = tweet_code.user
      @tweet_likes_data.concat([[tweet_code, tweet_likes, tweet_unlikes, tweet_user]])
    end
    render json: @tweet_likes_data
  end


  def show
  end
end
