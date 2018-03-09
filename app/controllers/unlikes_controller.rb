class UnlikesController < ApplicationController
  def index
    @already_unlike = current_user.unlikes.where(tweet_code_id: params[:params][:tweet_data])
    if @already_unlike.empty?
      render json: {already_unlike: false}
    else
      render json: {already_unlike: true}
    end
  end

  def create
    @tweet_code = TweetCode.find(params[:params][:tweet_data])
    @tweet_code.unlikes.create(user_id: current_user.id)
  end

  def destroy
    @tweet_code = TweetCode.find(params[:id])
    @tweet_code.unlikes.find_by(user_id: current_user.id).destroy
  end
end
