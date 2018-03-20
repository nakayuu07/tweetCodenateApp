class WareRegistration < ApplicationRecord
  belongs_to :user
  belongs_to :wear_item
end
