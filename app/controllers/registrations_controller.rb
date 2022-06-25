class RegistrationsController < Devise::SessionsController
  respond_to :json

  def create
    register_failed('Email already registerd') and return  if User.exists?(email: registration_params[:email])
    super
  end

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?
    register_failed
  end

  def register_success
    render json: { message: 'Signed up sucessfully.' }
  end

  def register_failed(message = 'Something went wrong.')
    render json: { message: message }
  end

  def registration_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end