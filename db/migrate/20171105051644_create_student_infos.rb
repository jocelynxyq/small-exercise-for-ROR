class CreateStudentInfos < ActiveRecord::Migration
  def change
    create_table :student_infos do |t|
      t.string :name
      t.integer :number
      t.string :major
      t.string :email

      t.timestamps null: false
    end
  end
end
