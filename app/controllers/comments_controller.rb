class CommentsController < ApplicationController
  def index
    tweet = TweetCode.find(params[:tweet_code_id])
    tweet_comments = tweet.comments

    @comments_info = []
    tweet_comments.each do |comment|
      user_info = comment.user
      user_tweets = user_info.tweet_codes.length
      user_following = user_info.following.length
      user_followed = user_info.followers.length
      @comments_info << [comment,user_info,user_tweets,user_following,user_followed]
    end



    render json: @comments_info
  end

  def create
    comment = Comment.create(user_id: current_user.id, tweet_code_id: params[:tweet_code_id].to_i, text: params[:comment_value])
    user_info = comment.user
    @comment_info = []
    @comment_info << [comment,user_info]
    render json: @comment_info
  end
end
