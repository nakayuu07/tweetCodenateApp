class UserRelationship < ApplicationRecord
  belongs_to :followed, class_name: "User"
  belongs_to :follower, class_name: "User"

  def self.Is_tweet_current_user?(user_id)
    self.current_user == User.find(user_id)
  end
end
