Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth',controllers:{
    omniauth_callbacks: "users/omniauth_callbacks"
  }

  resources :wear_items
  resources :want_closets
  resources :tweet_codes
  resources :users
  resources :relationships
  resources :likes
  resources :unlikes
  resources :home_tweet_codes
  resources :aggregate_infomations
  resources :realize_following_tweets
end
