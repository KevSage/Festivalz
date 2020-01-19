# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_18_190657) do

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "bio"
    t.string "genre"
    t.string "spotify"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "festivals", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "region"
    t.string "date"
    t.integer "ticket_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_follows_on_artist_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "performances", force: :cascade do |t|
    t.string "time"
    t.integer "festival_id", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_performances_on_artist_id"
    t.index ["festival_id"], name: "index_performances_on_festival_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "festival_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["festival_id"], name: "index_reservations_on_festival_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "image"
    t.string "region"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "follows", "artists"
  add_foreign_key "follows", "users"
  add_foreign_key "performances", "artists"
  add_foreign_key "performances", "festivals"
  add_foreign_key "reservations", "festivals"
  add_foreign_key "reservations", "users"
end
