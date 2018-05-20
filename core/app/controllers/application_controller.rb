require 'clang_exceptions'

class ApplicationController < ActionController::Base
  include ClangExceptions
  after_action :allow_iframe

  #protect_from_forgery with: :exception -> CSRF 문제

  def current_user_json
    current_user ? 
      Jbuilder.encode do |json|
        json.extract! current_user, :id, :email, :name, :profile_img
        json.clan current_user.clan
      end
      : nil
  end

  private
  def allow_iframe
    response.headers['X-Frame-Options'] = 'ALLOWALL'
  end
end
