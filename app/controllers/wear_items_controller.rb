class WearItemsController < ApplicationController

  def index
    @WearItem = WearItem.where(title: params[:search])
    render json: @WearItem
  end
end
