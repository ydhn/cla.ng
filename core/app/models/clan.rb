class Clan < ApplicationRecord
  has_many :relationships
  has_many :users, through: :relationships
  has_many :albums

  after_create :create_mission_album

  def mission_album
    self.albums.find_by(title: "오늘 미션 앨범")
  end

  private
  def create_mission_album
    self.albums.create! title: "오늘 미션 앨범", description: "우리 가족이 미션으로 올린 사진들"
  end
end
