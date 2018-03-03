class WearItem < ApplicationRecord
  mount_uploader :image, ImageUploader
end
