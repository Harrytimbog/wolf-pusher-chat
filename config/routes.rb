Rails.application.routes.draw do
  get 'chats/create'
  get 'chats/new'
  get 'chats/show'
  get 'chats/index'
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
