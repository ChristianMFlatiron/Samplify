Rails.application.routes.draw do

  #Custom Routes

  #http verb, url, controller#action

  get 'disciplines', to: 'disciplines#index'
  get 'instruments', to: 'instruments#index'
  get 'users', to: 'users#index'


  #resource: generate 7 routes that follow REST
  
  resources :disciplines, only: [:show, :create, :new, :edit, :update]
  resources :instruments, only: [:show, :create, :new, :edit, :update]
  resources :users, only: [:show, :create, :new, :edit, :update]

  #get '/users/:id', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #get "/users", action: :show, controller: 'users' 
  
end
