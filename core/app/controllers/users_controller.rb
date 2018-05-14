class UsersController < ApplicationController
  def show
    render json: current_user_json
  end
end
