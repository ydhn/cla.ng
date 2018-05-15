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

clan.albums.destroy_all
clan.albums.create! title: "리마인드 웨딩", description: "2018.05.13"
clan.albums.create! title: "제주도 여행", description: "2017.07.13~"
clan.albums.create! title: "오늘 미션 앨범", description: "2017.06~"

Question.destroy_all
Question.create! title: '올해의\n"버킷리스트"는?', description: '버킷리스트란 죽기 전에 꼭해고 싶은 일들을 적은 목록입니다. 올해 당신이 꼭 이루고싶은 버킷리스트는 무엇인가요?'
Question.create! title: '짜장면 VS 짬뽕', description:'당신의 선택은?'
Question.create! title: '내가 가보고 싶은 "나라"는 "@"" 이다.', description:'당신의 선택은?'

Article.destroy_all
Article.create! title: "나의 버킷리스트", description: "딸들이랑 같이 리마인드 웨딩 사진 찍고 싶어요~~"
Article.create! title: "마라톤~~", description: "가족이랑 마라톤 대회 나가기~~"
Article.create! title: "버킷리스트!", description: "1. 다이어트\n2. 유럽여행"

father.responses.destroy_all
father.responses.create! question_id: 1, clan_id: 1, resource_type: 'Article', resource_id: 1
mother.responses.destroy_all
mother.responses.create! question_id: 1, clan_id: 1, resource_type: 'Article', resource_id: 2
daughter.responses.destroy_all
daughter.responses.create! question_id: 1, clan_id: 1, resource_type: 'Article', resource_id: 3




