class Clan < ApplicationRecord
  has_many :relationships
  has_many :users, through: :relationships
  has_many :albums
end
