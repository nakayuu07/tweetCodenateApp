class UsersController < ApplicationController
  def index
    binding.pry
  end

  def show
    @user = current_user
    render json: @user
  end

  def update


    binding.pry
    user_image = params[:image]
    user_nickname = params[:nickname]
    contents = {}
    if user_image != nil && user_nickname != nil
      contents[:image] = user_image
      contents[:nickname] = user_nickname
    end

    current_user.update(image: contents[:image], nickname: contents[:nickname])

    #何もデータが与えられていない時の処理を描きたいな

  end

  def create
  end

end
