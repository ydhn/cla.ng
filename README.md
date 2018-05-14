# Cla.ng

## Backend Development
### Installation
```bash
cd core
bundle install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Start Server
```bash
cd core
bundle exec rails s webrick
```

## Frontend Development
### Installation
```bash
cd web
npm install
```

### Start 
```bash
npm start #local api server development
API_URL=http://cla.ng npm start #redirects to real api server
```

## Member
박서연, 이유영, 한윤도, 황수연