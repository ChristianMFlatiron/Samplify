Rails.application.routes.draw do
  
  resources :disciplines
  resources :instruments
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/users", to: "users#index" 
end
