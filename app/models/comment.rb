class Comment < ApplicationRecord
  belongs_to :tweet_code
  belongs_to :user
end
