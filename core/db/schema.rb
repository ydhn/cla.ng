# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180514092403) do

  create_table "albums", force: :cascade do |t|
    t.integer "clan_id"
    t.string "title"
    t.string "color"
    t.text "description"
    t.datetime "timestamp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clans", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "family_roles", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "photo_id"
  end

  create_table "identities", force: :cascade do |t|
    t.integer "user_id"
    t.string "provider"
    t.string "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_identities_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.integer "user_id"
    t.integer "album_id"
    t.integer "question_id"
    t.string "photo"
    t.text "description"
    t.string "title"
    t.datetime "timestamp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "photo_id"
    t.datetime "timestamp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "relationships", force: :cascade do |t|
    t.integer "family_role_id"
    t.integer "user_id"
    t.integer "clan_id"
    t.string "nickname"
  end

  create_table "responses", force: :cascade do |t|
    t.integer "question_id"
    t.string "resource_type"
    t.integer "resource_id"
    t.integer "user_id"
    t.integer "clan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resource_type", "resource_id"], name: "index_responses_on_resource_type_and_resource_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "clan_id"
    t.string "email", default: ""
    t.string "encrypted_password", default: "", null: false
    t.string "name"
    t.string "profile_img"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "voice_records", force: :cascade do |t|
    t.integer "user_id"
    t.string "sound"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
