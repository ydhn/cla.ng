class VoiceRecord < ApplicationRecord
  belongs_to :response, optional: true
  belongs_to :user, optional: true
end
