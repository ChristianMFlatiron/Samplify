Rails.application.routes.draw do
  
  resources :disciplines, only: [:index, :show]
  resources :instruments, only: [:index, :show]
  resources :users, only: [:index, :show]

  #get '/users/:id', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #get "/users", action: :show, controller: 'users' 
  
end
