# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110414103140) do

  create_table "calendars", :force => true do |t|
    t.datetime "start"
    t.datetime "end"
    t.string   "title"
    t.string   "location"
    t.text     "body"
  end

  create_table "sortables", :force => true do |t|
    t.integer "record_listing_id"
    t.text    "record_text"
  end

end
