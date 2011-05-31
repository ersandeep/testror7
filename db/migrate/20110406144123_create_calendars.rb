class CreateCalendars < ActiveRecord::Migration
  def self.up
    create_table :calendars do |t|
 
            t.column :start, :datetime
            t.column :end ,  :datetime
            t.column :title, :string
            t.column :location, :string
            t.column :body,  :text
    end
  end

  def self.down
    drop_table :calendars
  end
end
