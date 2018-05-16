father_role = FamilyRole.create! title: "아버지", description: "자상한 아버지!"
mother_role = FamilyRole.create! title: "어머니", description: "상냥한 어머니!"
son_role = FamilyRole.create! title: "아들", description: "말썽꾸러기 아들!"
daughter_role = FamilyRole.create! title: "딸", description: "천방지축 딸!"

Clan.destroy_all
clan = Clan.create! title: "수연이네 가족", description: "수연이네 가족입니다."

User.destroy_all

default_profile_img_url = 'https://community.smartsheet.com/sites/default/files/default_user.jpg'
father = User.create! email: "soo@cla.ng", password: "123456", password_confirmation: "123456", 
  name: "인생은달리기", profile_img: default_profile_img_url
father.join_clan clan_id: clan.id, family_role_id: father_role.id
mother = User.create! email: "psy@cla.ng", password: "123456", password_confirmation: "123456", 
  name: "오늘도감사", profile_img: default_profile_img_url
mother.join_clan clan_id: clan.id, family_role_id: mother_role.id
son    = User.create! email: "master@cla.ng", password: "123456", password_confirmation: "123456", 
  name: "갓지효", profile_img: default_profile_img_url
son.join_clan clan_id: clan.id, family_role_id: son_role.id
daughter = User.create! email: "young@cla.ng", password: "123456", password_confirmation: "123456", 
  name: "뜌요니", profile_img: default_profile_img_url
daughter.join_clan clan_id: clan.id, family_role_id: daughter_role.id

clan.albums.destroy_all
clan.albums.create! title: "리마인드 웨딩", description: "2018.05.13"
clan.albums.create! title: "제주도 여행", description: "2017.07.13~"
clan.albums.create! title: "오늘 미션 앨범", description: "2017.06~"

Question.destroy_all
bucketlist = Question.create! title: '올해의\n"버킷리스트"는?', description: '버킷리스트란 죽기 전에 꼭해고 싶은 일들을 적은 목록입니다. 올해 당신이 꼭 이루고싶은 버킷리스트는 무엇인가요?'
Question.create! title: '짜장면 VS 짬뽕', description: '당신의 선택은?'
Question.create! title: '내가 가보고 싶은 "나라"는 "@"" 이다.', description:'당신의 선택은?'

Response.destroy_all
Article.destroy_all

a = Article.create! title: "버킷리스트!", description: "1. 다이어트\n2. 유럽여행"
response = father.responses.create! resource: a, question_id: bucketlist.id, clan_id: clan.id

a = Article.create! title: "나의 버킷리스트", description: "딸들이랑 같이 리마인드 웨딩 사진 찍고 싶어요~~"
response = mother.responses.create! resource: a, question_id: bucketlist.id, clan_id: clan.id

a = Article.create! title: "마라톤~~", description: "가족이랑 마라톤 대회 나가기~~"
response = daughter.responses.create! resource: a, question_id: bucketlist.id, clan_id: clan.id

