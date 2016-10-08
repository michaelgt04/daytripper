Rails.application.routes.draw do
  root 'static_pages#index'

  post 'yelp/data' => 'yelp#search'
end
