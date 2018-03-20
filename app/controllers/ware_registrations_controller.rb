class WareRegistrationsController < ApplicationController
  def index
    @ware_registrations= WareRegistration.where(user_id: current_user.id)
    @wear_items = @ware_registrations.map { |n| n.wear_item }
    render json: @wear_items
  end

  def create
    @wearitem= WearItem.find(params[:params][:dataId])
    @ware_registration = @wearitem.ware_registrations.create(user_id: current_user.id)
    render json: @ware_registration
  end
end
