Rails.application.routes.draw do
  mount Upmin::Engine => '/admin'
  devise_for :users
  resources :users
  root to: 'visitors#index'
  get 'dashboard' => 'dashboard#index', :as => :dashboard
  get '*path' => 'dashboard#index'
end
