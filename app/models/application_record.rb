class ApplicationRecord < ActiveRecord::Base
  # include DeviseTokenAuth::Concerns::SetUserByToken
  self.abstract_class = true
end
