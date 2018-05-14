class QuestionsController < ApplicationController
  def index
    user_clan = current_user.clan
    @questions = Question.all
    @questions.each do |q|
      q.response_number = q.responses.where(clan_id: user_clan.id)
    end
    
    render json: @questions
  end

  def show
  end
end
