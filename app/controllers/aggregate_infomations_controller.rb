class AggregateInfomationsController < ApplicationController
  def show
    likes= TweetCode.find(params[:id]).likes.map {|like| like.user}
    unlikes= TweetCode.find(params[:id]).unlikes.map {|like| like.user}
    @like_users_age, @like_users_sex = TweetCode.aggregate_like_users(likes)
    @unlike_users_age, @unlike_users_sex = TweetCode.aggregate_unlike_users(unlikes)

    render json: {like_of_age: @like_users_age, like_of_sex: @like_users_sex,
                  unlike_of_age: @unlike_users_age, unlike_of_sex: @unlike_users_sex}
  end
end
