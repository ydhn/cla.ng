class QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
    @responses = @question.responses.where(clan_id: current_user.clan.id)
  end
end
