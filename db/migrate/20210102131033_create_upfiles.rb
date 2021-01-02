class CreateUpfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :upfiles do |t|
      t.string :url

      t.timestamps
    end
  end
end
