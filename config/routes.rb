Rails.application.routes.draw do
  root "file#index"
  post 'upload' => 'file#upload'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
