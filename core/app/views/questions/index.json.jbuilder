json.array! @questions do |q|
  json.extract! q, :id, :title, :description
  json.photo q.photo
  json.responses q.responses.where(clan_id: current_user.clan.id).count
end