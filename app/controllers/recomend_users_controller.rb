class RecomendUsersController < ApplicationController
  def index
    following_user = current_user.following
    users = User.where.not(id: current_user.id)[0..4]

    users.delete_if do |user|
      following_user.include?(user)
    end

    @users = []
    users.each do |user|
      tweet_sum = user.tweet_codes.length
      user_following = user.following.length
      user_followed = user.followers.length
      @users << [user, tweet_sum, user_following, user_followed]
    end



    render json: @users
  end
end
