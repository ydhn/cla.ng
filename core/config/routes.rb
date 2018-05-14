Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing_page#index"

  devise_scope :user do
    get "auth/kakao/callback", to: 'users/omniauth_callbacks#kakao'
  end

  devise_for :users, :controllers => {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: "users/registrations",
    sessions: "users/sessions"
  }

  get "users/me", to: "users#show"
  resources :users, only: [:show]
  resources :family_roles, only: [:index]
  resources :questions, only: [:index, :show]
end
