# HyruleCompendium SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HyruleCompendiumFeatures
  def self.make_feature(name)
    case name
    when "base"
      HyruleCompendiumBaseFeature.new
    when "ratelimit"
      HyruleCompendiumRatelimitFeature.new
    when "retry"
      HyruleCompendiumRetryFeature.new
    when "test"
      HyruleCompendiumTestFeature.new
    when "timeout"
      HyruleCompendiumTimeoutFeature.new
    else
      HyruleCompendiumBaseFeature.new
    end
  end
end
