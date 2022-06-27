class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable,
         :jwt_authenticatable, jwt_revocation_strategy: ::JwtDenylist

  self.skip_session_storage = [:http_auth, :params_auth]

  validates :email, presence: true, uniqueness: true

  before_create :set_referral_token

  def jwt_payload
    { id: id, email: email, exp: 60.days.from_now.to_i }
  end

  def set_referral_token
    self.referral_token = SecureRandom.uuid
  end
end
