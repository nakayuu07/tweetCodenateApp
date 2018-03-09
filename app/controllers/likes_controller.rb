class LikesController < ApplicationController
  def index
    @already_like = current_user.likes.where(tweet_code_id: params[:params][:tweet_id])
    if @already_like.empty?
      render json: {already_likes: false}
    else
      render json: {already_likes: true}
    end
  end

  def create
    @tweet_code = TweetCode.find(params[:params][:tweet_data][:id])
    @tweet_code.likes.create(user_id: current_user.id)
  end

  def destroy
    @tweet_code = TweetCode.find(params[:id])
    @tweet_code.likes.find_by(user_id: current_user.id).destroy
  end
end
