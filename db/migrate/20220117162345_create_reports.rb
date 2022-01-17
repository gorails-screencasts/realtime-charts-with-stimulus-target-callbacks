class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.date :date
      t.integer :value

      t.timestamps
    end
  end
end
