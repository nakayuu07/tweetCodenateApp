class WearItemsController < ApplicationController

  def index
    @WearItem = WearItem.search(title: params[:search]).result[0..9]
    render json: @WearItem
  end
end
