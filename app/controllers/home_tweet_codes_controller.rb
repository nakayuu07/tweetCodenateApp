class HomeTweetCodesController < ApplicationController
  def index
    @current_user_following = UserRelationship.where(follower_id: current_user.id)
    @show_tweet_data = []
    @current_user_following.each do |following_user|
      @show_tweet_data.concat(TweetCode.where(user_id: following_user[:followed_id]))
    end
    render json: @show_tweet_data
  end
end
