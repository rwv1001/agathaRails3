class CreateWillingTutors < ActiveRecord::Migration
  def self.up
    create_table :willing_tutors do |t|
      t.integer :person_id
      t.integer :course_id
      t.integer :order_of_preference

      t.timestamps
    end
  end

  def self.down
    drop_table :willing_tutors
  end
end
