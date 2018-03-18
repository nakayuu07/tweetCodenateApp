class WearItemsController < ApplicationController

  def index
    @WearItem = WearItem.search(title: params[:search]).result[0..9]
    # @WearItem = WearItem.search(title: params[:search]).result
    render json: @WearItem
  end
end
