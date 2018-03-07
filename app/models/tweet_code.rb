class TweetCode < ApplicationRecord
  belongs_to :user
  mount_uploader :code_image, ImageUploader

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

    shoes_hash = {"shoes_name" => params[:tweet_item_shoes][2],"shoes_image" => params[:tweet_item_shoes][5],"shoes_type" => params[:tweet_item_shoes][3],"shoes_class" => params[:tweet_item_shoes][4]}
    return hat_hash.merge(tops_hash).merge(pants_hash).merge(shoes_hash)
  end

end
