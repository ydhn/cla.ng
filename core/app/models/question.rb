class Question < ApplicationRecord
  has_many :responses
  has_one :photo
end
