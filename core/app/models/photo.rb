class Photo < ApplicationRecord
  belongs_to :album, optional: true
  belongs_to :question, optional: true
  belongs_to :response, optional: true
  belongs_to :user, optional: true
end
