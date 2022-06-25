class RegistrationsController < Devise::SessionsController
  def create
    @user = User.new(registration_params)
    if @user.save
      @current_user = @user
      render :create
    else
      render json: @user.errors.as_json, status: :unprocessable_entity
    end
  end

  private
  def registration_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end