class UsersController < ApplicationController
  def index
    binding.pry
  end

  def show
    @user = current_user
    render json: @user
  end

  def update



    user_image = params[:image]
    user_nickname = params[:nickname]
    contents = {}
    if user_image != nil && user_nickname != nil
      contents[:image] = user_image
      contents[:nickname] = user_nickname
    end

    current_user.update_attribute(contents)

    #何もデータが与えられていない時の処理を描きたいな

  end

  def create
    binding.pry
  end

end
