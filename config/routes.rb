Rails.application.routes.draw do

  get '/', to: 'main_menu#index', as: 'home'
  get '/main_menu', to: 'main_menu#index', as: 'menu'
  get '/cards', to: 'cards#index', as: 'cards'
  get '/rules', to: 'rules#index', as: 'how_to_play'
  get '/leaderboards', to: 'leaderboards#index', as: 'leaderboard'
  root "welcome#index"

  resources :users, only: [:new, :create]

  resources :games

  resources :sessions, only: [:new, :create] do
    delete :destroy, on: :collection
  end

end
