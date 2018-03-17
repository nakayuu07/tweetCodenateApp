class MostFavTweetsController < ApplicationController
  def index
    tweet = TweetCode.all
    fav_tweet_len = tweet.inject( {} ) do |h, elm|
                      h[elm.id.to_s] = elm.likes.length
                      h
                    end
    sorted_tweet = fav_tweet_len.sort_by{|k,v| v }.reverse
    extract_tweet = sorted_tweet.slice(0..3)
    @most_fav_tweet= extract_tweet.to_h.keys.map {|n| TweetCode.find(n.to_i)}
    render json: @most_fav_tweet
  end
end
