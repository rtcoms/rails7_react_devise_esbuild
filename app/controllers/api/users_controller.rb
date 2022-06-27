class Api::UsersController < Api::BaseController
  def profile
    # binding.pry
    @user = current_user
    render :profile
  end
end
