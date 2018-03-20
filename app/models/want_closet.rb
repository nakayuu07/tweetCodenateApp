class WantCloset < ApplicationRecord
  mount_uploader :image, ImageUploader
  # belongs_to :user
  # has_many :ware_registrations
end
