class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :relationships
  has_many :clans, through: :relationships
  has_many :responses
  #accepts_nested_attributes_for :relationships

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  def join_clan(params)
    return if params[:clan_id].blank? or params[:family_role_id].blank? 
    Relationship.create! user_id: self.id, clan_id: params[:clan_id], family_role_id: params[:family_role_id]
  end
end
