Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth',controllers:{
    omniauth_callbacks: "users/omniauth_callbacks"
  }

  resources :wear_items
  resources :want_closets
  resources :tweet_codes
  resources :users
end
