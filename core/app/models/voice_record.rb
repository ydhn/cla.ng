class VoiceRecord < ApplicationRecord
  has_one :response, as: :resource
  belongs_to :user, optional: true
end
