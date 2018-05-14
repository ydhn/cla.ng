class VoiceRecord < ApplicationRecord
  belongs_to :response
  belongs_to :user
end
