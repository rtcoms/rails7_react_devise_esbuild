class CreateInvitations < ActiveRecord::Migration[7.0]
  def change
    create_table :invitations do |t|
      t.string :invitee_email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
