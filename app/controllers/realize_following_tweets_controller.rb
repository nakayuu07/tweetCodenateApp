class RealizeFollowingTweetsController < ApplicationController
  def index
    following_users = current_user.following
    @yet_replay_tweet = []
    following_users.each do |following_user|
      following_user.tweet_codes.each do |following_user_tweet|
        is_user_likes = following_user_tweet.likes.map {|n| n[:user_id] == current_user.id}.include?(true)
        is_user_unlikes = following_user_tweet.unlikes.map {|n| n[:user_id] == current_user.id}.include?(true)
        if is_user_likes == false && is_user_unlikes == false
          @yet_replay_tweet << following_user_tweet
        end
      end
    end
    @sum_yet_replay_tweet = @yet_replay_tweet.length
    render json: {params: {'yet_replay_tweet': @yet_replay_tweet,
                           'sum_yet_replay_tweet': @sum_yet_replay_tweet}}
  end

  def create
    if params[:params][:taste] == 'like'
      @tweet_code = TweetCode.find(params[:params][:tweet_data][:id])
      @tweet_code.likes.create(user_id: current_user.id)
    else
      @tweet_code = TweetCode.find(params[:params][:tweet_data][:id])
      @tweet_code.unlikes.create(user_id: current_user.id)
    end
  end

end
