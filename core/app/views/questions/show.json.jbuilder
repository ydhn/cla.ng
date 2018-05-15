json.extract! @question, :id, :title, :description
json.photo @question.photo
json.responses do
  json.array! @responses do |r|
    json.user do
      json.extract! r.user, :profile_img, :name
      json.familyRole r.user.family_role.title
    end
    json.extract! r, :resource_type
    json.resource r.resource
  end
end