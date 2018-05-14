class Photo < ApplicationRecord

  mount_uploader :photo, PhotoUploader
  belongs_to :album, optional: true
  belongs_to :question, optional: true
  belongs_to :response, optional: true
end
