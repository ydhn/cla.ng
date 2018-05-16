class Response < ApplicationRecord
  belongs_to :question
  belongs_to :user
  belongs_to :clan

  belongs_to :resource, polymorphic: true
end