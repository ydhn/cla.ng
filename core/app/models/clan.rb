class Clan < ApplicationRecord
  has_many :users
  has_many :albums
end
