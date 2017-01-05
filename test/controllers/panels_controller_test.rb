require 'test_helper'

class PanelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @panel = panels(:one)
  end

  test "should get index" do
    get panels_url
    assert_response :success
  end

  test "should get new" do
    get new_panel_url
    assert_response :success
  end

  test "should create panel" do
    assert_difference('Panel.count') do
      post panels_url, params: { panel: { color1: @panel.color1, color2: @panel.color2, color3: @panel.color3, color4: @panel.color4, color5: @panel.color5, color6: @panel.color6, description: @panel.description, title: @panel.title } }
    end

    assert_redirected_to panel_url(Panel.last)
  end

  test "should show panel" do
    get panel_url(@panel)
    assert_response :success
  end

  test "should get edit" do
    get edit_panel_url(@panel)
    assert_response :success
  end

  test "should update panel" do
    patch panel_url(@panel), params: { panel: { color1: @panel.color1, color2: @panel.color2, color3: @panel.color3, color4: @panel.color4, color5: @panel.color5, color6: @panel.color6, description: @panel.description, title: @panel.title } }
    assert_redirected_to panel_url(@panel)
  end

  test "should destroy panel" do
    assert_difference('Panel.count', -1) do
      delete panel_url(@panel)
    end

    assert_redirected_to panels_url
  end
end
