class AggregateInfomationsController < ApplicationController
  def show
    tweet_code = TweetCode.find(params[:id])
    likes_of_users = tweet_code.likes
    unlikes_of_users = tweet_code.unlikes

    @like_users_age = {'s10': 0, 's20': 0, 's30': 0, 's40': 0, 's50': 0, 'over60': 0}
    @like_users_sex = {'man': 0, 'woman': 0}
    if likes_of_users.empty? == false
      likes_of_users.each do |n|
        user = User.find(n[:user_id])
        if user[:age].between?(0,19)
          @like_users_age[:s10] += 1
        elsif user[:age].between?(20,29) then
          @like_users_age[:s20] += 1
        elsif user[:age].between?(30,39) then
          @like_users_age[:s30] += 1
        elsif user[:age].between?(40,49) then
          @like_users_age[:s40] += 1
        elsif user[:age].between?(50,59) then
          @like_users_age[:s50] += 1
        else
          @like_users_age[:over60] += 1
        end

        if user[:sex] == 1
          @like_users_sex[:man] += 1
        else
          @like_users_sex[:woman] += 1
        end
      end
    end

    @unlike_users_age = {'s10': 0, 's20': 0, 's30': 0, 's40': 0, 's50': 0, 'over60': 0}
    @unlike_users_sex = {'man': 0, 'woman': 0}
    if unlikes_of_users.empty? == false
      unlikes_of_users.each do |n|
        user = User.find(n[:user_id])
        if user[:age].between?(0,19)
          @unlike_users_age[:s10] += 1
        elsif user[:age].between?(20,29) then
          @unlike_users_age[:s20] += 1
        elsif user[:age].between?(30,39) then
          @unlike_users_age[:s30] += 1
        elsif user[:age].between?(40,49) then
          @unlike_users_age[:s40] += 1
        elsif user[:age].between?(50,59) then
          @unlike_users_age[:s50] += 1
        else
          @unlike_users_age[:over60] += 1
        end

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
