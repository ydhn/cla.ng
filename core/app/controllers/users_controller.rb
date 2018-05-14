class UsersController < ApplicationController
  def show
    render json: current_user_json
  end

  def create
    raise UnauthorizedException, '먼저 소셜 로그인을 해주세요' unless current_user
    raise BadRequest, '빈 칸이 있습니다' if params[:name].blank? or params[:family_role_id].blank?
    
    current_user.update! name: params[:name]
    Relationship.create! clan_id: 1, user_id: current_user.id, family_role_id: params[:family_role_id]
    
    render json: current_user_json
  end
end