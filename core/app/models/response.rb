class Response < ApplicationRecord
  belongs_to :question
  belongs_to :user
  belongs_to :clan

  def resource
    debugger
  end
end