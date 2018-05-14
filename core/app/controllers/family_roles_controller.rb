class FamilyRolesController < ApplicationController
  def index
    render json: FamilyRole.all
  end
end
