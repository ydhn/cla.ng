class Response < ApplicationRecord
  belongs_to :question
  belongs_to :user

  def resource
    debugger
  end
end