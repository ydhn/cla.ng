class Article < ApplicationRecord
  belongs_to :response
  belongs_to :user, optional: true
end
