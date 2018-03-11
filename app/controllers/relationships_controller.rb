class RelationshipsController < ApplicationController

  def index
    @user = User.find(params[:params][:user_id])

    if(current_user == @user)
      @same_user_response = {'same_user': true}
      render json: @same_user_response
    else
      if(current_user.following.include?(@user))
        @is_follow = {'is_follow': true, 'same_user': false }
        render json: @is_follow
      else
        @is_follow = {'is_follow': false, 'same_user': false }
        render json: @is_follow
      end
    end
  end

  def create
    @user = User.find(params[:params][:user_id])
    UserRelationship.create(follower_id: current_user.id, followed_id: @user.id)
  end

  def destroy
    @user = User.find(params[:id])
    UserRelationship.find_by(follower_id: current_user.id, followed_id: @user.id).destroy
  end
end
