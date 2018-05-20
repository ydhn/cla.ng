Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing_page#index"

  resources :users, only: [:create] do
    get "me", on: :collection, to: 'users#show'
    #get "auth/success", on: :collection, to: 'users#auth_success'
  end
  
  # devise_for :users, skip: :all
  devise_for :users, :controllers => {
    omniauth_callbacks: "users/omniauth_callbacks",
    sessions: "users/sessions"
  }
  # devise_scope :user do
  #   get "/auth/kakao", to: 'users/omniauth_callbacks#passthru'
  #   get "/auth/kakao/callback", to: 'users/omniauth_callbacks#kakao'
  # end  

  resources :users do
    get "auth/success", on: :collection, to: 'users#auth_success'
  end

  resources :family_roles, only: [:index]
  resources :albums, only: [:index, :show] do
    post "/photos", on: :member, to: 'photos#create'
    get "/photos/:photo_id", on: :member, to: 'photos#show'
  end
  resources :questions, only: [:index, :show] do
    post "/responses/:resource_type", to: 'responses#create'
  end
end
