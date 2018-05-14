class Relationship < ApplicationRecord
  belongs_to :clan
  belongs_to :user
  belongs_to :family_role, optional: true
end
