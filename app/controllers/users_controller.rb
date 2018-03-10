class UsersController < ApplicationController
  def index
    binding.pry
  end

  def show
    @user = current_user
    @user_tweet = @user.tweet_codes
    @user_tweet_sum = @user_tweet.length
    @user_following_sum = @user.following.length
    @user_followers_sum = @user.followers.length

    render json: {user_data: @user,
                  user_tweet: @user_tweet,
                  user_tweet_sum: @user_tweet_sum,
                  user_following_sum: @user_following_sum,
                  user_followers_sum: @user_followers_sum}
  end

  def update
    contents = {}
    if params[:image] != nil || params[:nickname] != nil || params[:sex] != nil || params[:age] != nil
      contents[:image] = params[:image]
      contents[:nickname] = params[:nickname]
      contents[:sex] = params[:sex]
      contents[:age] = params[:age]

      current_user.update(image: contents[:image], nickname: contents[:nickname],
                          sex: contents[:sex], age: contents[:age])
      @response = {response: true}
      render json: @response
    else
      @response = {response: false}
      render json: @response
    end
  end

  def create
  end

end
