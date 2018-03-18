class UserEditsController < ApplicationController
  def update
    @user_info = current_user.update(image: params[:image], nickname: params[:nickname], selfinfo: params[:selfIntro])
    render json: @user_info
  end
end
