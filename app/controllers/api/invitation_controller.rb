class Api::InvitationController < Api::BaseController
  before_action :authenticate_user!

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.user = current_user

    #TODO: check if email is already registered
    #  add validation for existing email
    if @invitation.save
      render json: @invitation.as_json
    else
      render json: { errors: @invitation.errors }, status: :unprocessable_entity
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:invitee_email)
  end
end
