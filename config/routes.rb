Agatha::Application.routes.draw do
  match '' => 'welcome#default'
  match 'admin' => 'welcome#index'
  match 'accessdenied' => 'welcome#accessdenied'
  match 'index' => 'welcome#index'
  match 'termly' => 'welcome#termly'
  match 'mailing' => 'welcome#mailing'
  match 'clear_filter' => 'people#clear_filter'
  match 'help' => 'welcome#help'
  resources :attendees
  resources :lectures
  resources :pcourses
  resources :student_programmes
  resources :programmes
  resources :people
  resources :courses
  resources :users
  resources :institutions
  resources :locations
  resources :tutorials
  resources :groups
  resources :tutorial_schedules
  resources :willing_tutors
  resources :willing_lecturers
  resources :email_templates
  resources :agatha_emails
  resources :agatha_files
  resources :maximum_tutorials
  match '/:controller(/:action(/:id))'
end
