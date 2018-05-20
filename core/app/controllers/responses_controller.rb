class ResponsesController < ApplicationController
  
  def create
    resource_class = params[:resource_type].constantize
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'Article'
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'Photo'
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'VoiceRecord'
    resource = resource_class.create! allowed_params
    response = current_user.responses.create! resource: resource, 
      question_id: params[:question_id], clan_id: current_user.clan.id

    render json: response
  end
end
