class AggregateInfomationsController < ApplicationController
  def show
    tweet_code = TweetCode.find(params[:id])
    likes_of_users = tweet_code.likes
    unlikes_of_users = tweet_code.unlikes

    @like_users_age = []
    @like_users_sex = {'man': 0, 'woman': 0}
    if likes_of_users.empty? == false
      likes_of_users.each do |n|
        user = User.find(n[:user_id])
        @like_users_age.push(user[:age])
        if user[:sex] == 1
          @like_users_sex[:man] += 1
        else
          @like_users_sex[:woman] += 1
        end
      end
    end

    @unlike_users_age = []
    @unlike_users_sex = {'man': 0, 'woman': 0}
    if unlikes_of_users.empty? == false
      unlikes_of_users.each do |n|
        user = User.find(n[:user_id])
        @unlike_users_age.push(user[:age])
        if user[:sex] == 1
          @unlike_users_sex[:man] += 1
        else
          @unlike_users_sex[:woman] += 1
        end
      end
    end

    render json: {like_of_age: @like_users_age, like_of_sex: @like_users_sex,
                  unlike_of_age: @unlike_users_age, unlike_of_sex: @unlike_users_sex}
  end
end
