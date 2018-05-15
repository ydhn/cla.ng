class Response < ApplicationRecord
  belongs_to :question
  belongs_to :user
  belongs_to :clan

  def resource
    rsc = Object.const_get self.resource_type
    rsc.find(self.resource_id)
  end
end