class ResponsesController < ApplicationController
  
  def create
    clan = current_user.clan
    question = Question.find(question_id)
    resource_class = params[:resource_type].constantize
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'Article'
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'Photo'
    allowed_params = params.permit(:title, :description) if params[:resource_type] == 'VoiceRecord'
    resource = resource_class.create! allowed_params
    
    if params[:resource_type] == 'Photo'
      resource.photo = params[:photos][0]
      resource.title = question.title
      resource.description = "#{question.title}에 대한 #{user.family_role.title}의 답변"
      resource.album_id = clan.mission_album.id
      resource.save!
    end

    if params[:resource_type] == 'VoiceRecord'
      resource.sound = params[:sound]
      resource.save!
    end
    
    response = current_user.responses.create! resource: resource, 
      question_id: params[:question_id], clan_id: clan.id

    render json: response
  end
end
