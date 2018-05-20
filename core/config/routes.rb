Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing_page#index"

  resources :users, only: [:create] do
    get "me", on: :collection, to: 'users#show'
    get "auth/success", on: :collection, to: 'users#auth_success'
  end
  
  devise_scope :user do
    get "auth/kakao/callback", to: 'users/omniauth_callbacks#kakao'
  end
  
  devise_for :users, :controllers => {
    omniauth_callbacks: "users/omniauth_callbacks",
    sessions: "users/sessions"
  }

  resources :family_roles, only: [:index]
  resources :questions, only: [:index, :show] do
    post "/responses/:resource_type", to: 'responses#create'
  end
end
