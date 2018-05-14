require 'clang_exceptions'

class ApplicationController < ActionController::Base
  include ClangExceptions
  
  #protect_from_forgery with: :exception -> CSRF 문제

  def current_user_json
    current_user ? 
      Jbuilder.encode do |json|
        json.extract! current_user, :id, :email, :name, :profile_img
        json.clan current_user.clan
      end
      : nil
  end
end
