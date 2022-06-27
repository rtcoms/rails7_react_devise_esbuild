require "test_helper"

class Api::InvitationControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_invitation_create_url
    assert_response :success
  end
end
