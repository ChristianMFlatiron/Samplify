Rails.application.routes.draw do

  #Custom Routes

  #http verb, url, controller#action

  # get 'disciplines', to: 'disciplines#index'
  # get 'instruments', to: 'instruments#index'
  # get 'users', to: 'users#index'


  #resource: generate 7 routes that follow REST
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  
  resources :instruments, only: [:index,:show]
  resources :users, only: [:index,:show, :create, :update]
  resources :user_instruments, only: [:index, :show, :create, :update]

  get "/cookie_click", to: "sessions#click"

  #get '/users/:id', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #get "/users", action: :show, controller: 'users' 
  
end
