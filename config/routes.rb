Rails.application.routes.draw do
  mount Upmin::Engine => '/admin'
  devise_scope :user do
    get "/users/sign_up",  :to => "dashboard#index"
    authenticated :user do
      root to: 'dashboard#index', as: :authenticated_root
    end
    unauthenticated do
      root to: 'devise/sessions#new', as: :unauthenticated_root
    end
  end
  devise_for :users, :controllers => { :registrations => "registrations" }
  resources :users
  get 'dashboard' => 'dashboard#index', :as => :dashboard
  get '*path' => 'dashboard#index'
  root to: 'devise/sessions#new'
end
