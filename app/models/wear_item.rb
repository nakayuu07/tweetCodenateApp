class WearItem < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_many :ware_registrations
end
