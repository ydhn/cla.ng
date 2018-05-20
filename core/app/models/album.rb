class Album < ApplicationRecord
  belongs_to :clan, optional: true
  has_many :photos

end
