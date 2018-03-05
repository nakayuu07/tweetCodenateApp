class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable

  include DeviseTokenAuth::Concerns::User
  mount_uploader :image, ImageUploader



  has_many :want_closets
  has_many :tweet_codes

  #フォロー&フォロワー
  has_many :active_relationships, foreign_key: 'follower_id', class_name: 'UserRelationship', dependent: :destroy
  has_many :passive_relationships, foreign_key: 'followed_id', class_name: 'UserRelationship', dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  #TwitterLogin



end
