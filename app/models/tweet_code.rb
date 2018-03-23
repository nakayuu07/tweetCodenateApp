class TweetCode < ApplicationRecord
  mount_uploader :code_image, ImageUploader
  # include AgeModule
  belongs_to :user

  has_many :likes
  has_many :unlikes

  has_many :comments

  def self.change_age(age)
    if age.between?(0,19)
      return :s10
    elsif age.between?(20,29) then
      return :s20
    elsif age.between?(30,39) then
      return :s30
    elsif age.between?(40,49) then
      return :s40
    elsif age.between?(50,59) then
      return :s50
    else
      return :over60
    end
  end

  def self.aggregate_like_users(likes)
    likes_hash = likes.pluck(:age,:sex)
    like_users_age = {'s10': 0, 's20': 0, 's30': 0, 's40': 0, 's50': 0, 'over60': 0}
    like_users_sex = {'man': 0, 'woman': 0}

    likes_hash.each do |user_info|
      user_info[1] == 1 ? like_users_sex[:man] += 1 : like_users_sex[:woman] += 1 
      changed_age = TweetCode.change_age(user_info[0])
      like_users_age[changed_age] +=1
    end

    return like_users_age, like_users_sex
  end

  def self.aggregate_unlike_users(unlikes)
    unlikes_hash = unlikes.pluck(:age,:sex)
    unlike_users_age = {'s10': 0, 's20': 0, 's30': 0, 's40': 0, 's50': 0, 'over60': 0}
    unlike_users_sex = {'man': 0, 'woman': 0}

    unlikes_hash.each do |user_info|
      user_info[1] == 1 ? unlike_users_sex[:man] += 1 : unlike_users_sex[:woman] += 1 
      changed_age = TweetCode.change_age(user_info[0])
      unlike_users_age[changed_age] +=1
    end
    return unlike_users_age, unlike_users_sex
  end


  def base64_conversion(uri_str, filename = 'base64')
    image_data = split_base64(uri_str)
    image_data_string = image_data[:data]
    image_data_binary = Base64.decode64(image_data_string)

    temp_img_file = Tempfile.new(filename)
    temp_img_file.binmode
    temp_img_file << image_data_binary
    temp_img_file.rewind

    img_params = {:filename => "#{filename}.#{image_data[:extension]}", :type => image_data[:type], :tempfile => temp_img_file}
    # ActionDispatch::Http::UploadedFile.new(img_params)
    img_params
  end

  def self.sort_tweet_item(params, base64)
    hat_hash = {"hat_name" => params[:tweet_item_hat][2],"hat_image" => params[:tweet_item_hat][5],"hat_type" => params[:tweet_item_hat][3],"hat_class" => params[:tweet_item_hat][4]}
    tops_hash = {"tops_name" => params[:tweet_item_tops][2],"tops_image" => params[:tweet_item_tops][5],"tops_type" => params[:tweet_item_tops][3],"tops_class" => params[:tweet_item_tops][4]}
    pants_hash = {"pants_name" => params[:tweet_item_pants][2],"pants_image" => params[:tweet_item_pants][5],"pants_type" => params[:tweet_item_pants][3],"tops_class" => params[:tweet_item_pants][4]}
    shoes_hash = {"shoes_name" => params[:tweet_item_shoes][2],"shoes_image" => params[:tweet_item_shoes][5],"shoes_type" => params[:tweet_item_shoes][3],"shoes_class" => params[:tweet_item_shoes][4]}
    return hat_hash.merge(tops_hash).merge(pants_hash).merge(shoes_hash)
  end

end
