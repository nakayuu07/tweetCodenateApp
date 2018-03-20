class WearItemsController < ApplicationController

  def index
    # @WearItem = WearItem.search(title: params[:search]).result[0..9]
    @WearItem = WearItem.search(title: params[:search]).result
    render json: @WearItem
  end

  def create
    @item = WearItem.create(maker: params[:marker],
                            title: params[:title],
                            itemtype: params[:itemType],
                            itemClass: params[:itemClass],
                            image: params[:image])

    @item.ware_registrations.create(user_id: current_user.id)
  end
end
