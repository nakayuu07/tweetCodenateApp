source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.4'
gem 'mysql2', '>= 0.3.18', '< 0.5'
gem 'puma', '~> 3.7'
gem 'rack-cors', :require => 'rack/cors'
gem 'devise_token_auth', :git => 'git://github.com/lynndylanhurley/devise_token_auth.git'
gem 'omniauth'
gem 'omniauth-twitter'
gem 'jbuilder', '~> 2.5'
gem 'pry-byebug'
gem 'carrierwave'
gem 'mini_magick'
gem 'fog'
gem 'dotenv-rails'
gem 'ransack'
gem 'unicorn'
gem 'therubyracer', platforms: :ruby


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'capistrano', '3.6.0' 
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano3-unicorn'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
