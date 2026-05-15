# HyruleCompendium SDK exists test

require "minitest/autorun"
require_relative "../HyruleCompendium_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = HyruleCompendiumSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
