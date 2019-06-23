Rails.application.routes.draw do

  devise_for :users
  root 'groups#index'

  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end

  resources :users, only: :show do
    collection do
      get 'search'
    end
  end
  root 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


