class QuestionsController < ApplicationController
  def index
    uc = current_user.clan
    @questions = Question.all
    
    render json: (Jbuilder.encode do |json|
      json.array! @questions do |q|
        json.extract! q, :title, :description
        json.photo q.photo
        json.responses q.responses.where(clan_id: uc.id)
      end
    end)
  end

  def show
  end
end
