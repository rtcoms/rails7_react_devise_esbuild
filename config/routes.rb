Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { session: :sessions, registrations: :registrations }
  end
end
