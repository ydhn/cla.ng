class VoiceRecord < ApplicationRecord
  mount_uploader :sound, SoundUploader
  has_one :response, as: :resource
  belongs_to :user, optional: true
end
