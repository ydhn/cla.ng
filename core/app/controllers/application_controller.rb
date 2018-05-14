require 'clang_exceptions'

class ApplicationController < ActionController::Base
  include ClangExceptions
  
  protect_from_forgery with: :exception
end
