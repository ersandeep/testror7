class CreateSortables < ActiveRecord::Migration
  def self.up
    create_table :sortables do |t|

            t.column :record_listing_id, :integer
            t.column :record_text,  :text
    end
  end

  def self.down
    drop_table :sortables
  end
end
