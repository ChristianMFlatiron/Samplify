Rails.application.routes.draw do

  #Custom Routes

  #http verb, url, controller#action

  # get 'disciplines', to: 'disciplines#index'
  # get 'instruments', to: 'instruments#index'
  # get 'users', to: 'users#index'


  #resource: generate 7 routes that follow REST
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'


  
  resources :disciplines, only: [:create, :show, :index]
  resources :instruments, only: [:create,:show, :index]
  # resources :users, only: [:index,:show, :create, :update]
  resources :users, only: [:create, :show, :index, :update] do 
    resources :items, only: [:create, :show, :index, :destroy]
 end

  #get '/users/:id', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # post "/login", to: "sessions#create"
  # get "/me", to: "users#show"
  # delete "/logout", to: "sessions#destroy"


  #get "/users", action: :show, controller: 'users' 
  
end
