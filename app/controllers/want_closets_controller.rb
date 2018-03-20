class WantClosetsController < ApplicationController

  # before_action :authenticate_user!
  #ぶっ壊す予定
  def index
    @WantClosetItem = current_user.want_closets.all
    render json: @WantClosetItem
  end

  def create
    @WantClosetItem = current_user.want_closets.create(want_item_params)
    render json: @WantClosetItem
  end

  private
    def want_item_params
      params.require(:params).permit(:image, :maker, :title, :itemtype, :itemClass)
    end
end
