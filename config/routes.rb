Rails.application.routes.draw do

  get '/', to: 'welcome#index', as: 'home'
  get '/main_menu', to: 'main_menu#index', as: 'menu'
  root "welcome#index"

  resources :users, only: [:new, :create]

  resources :games

  resources :sessions, only: [:new, :create] do
    delete :destroy, on: :collection
  end

end
