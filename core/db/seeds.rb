# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

father_role = FamilyRole.create! title: "아버지", description: "자상한 아버지!"
mother_role = FamilyRole.create! title: "어머니", description: "상냥한 어머니!"
son_role = FamilyRole.create! title: "아들", description: "말썽꾸러기 아들!"
daughter_role = FamilyRole.create! title: "딸", description: "천방지축 딸!"

clan = Clan.create! title: "수연이네 가족", description: "수연이네 가족입니다."
father = User.create! email: "soo@cla.ng", password: "123456", password_confirmation: "123456"
father.join_clan clan_id: clan.id, family_role_id: father_role.id
mother = User.create! email: "psy@cla.ng", password: "123456", password_confirmation: "123456"
mother.join_clan clan_id: clan.id, family_role_id: mother_role.id
son    = User.create! email: "master@cla.ng", password: "123456", password_confirmation: "123456"
son.join_clan clan_id: clan.id, family_role_id: son_role.id
daughter = User.create! email: "young@cla.ng", password: "123456", password_confirmation: "123456"
daughter.join_clan clan_id: clan.id, family_role_id: daughter_role.id

clan.albums.create! title: "홍콩", description: "2018-07 홍콩"