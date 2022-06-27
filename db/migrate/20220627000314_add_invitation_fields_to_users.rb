class AddInvitationFieldsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :referral_token, :string, null: false
    add_column :users, :referrer_id, :datetime
  end
end
