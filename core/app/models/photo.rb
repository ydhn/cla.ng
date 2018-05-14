class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :album
  belongs_to :response
  belongs_to :question
end
