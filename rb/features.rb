# HyruleCompendium SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module HyruleCompendiumFeatures
  def self.make_feature(name)
    case name
    when "base"
      HyruleCompendiumBaseFeature.new
    when "test"
      HyruleCompendiumTestFeature.new
    else
      HyruleCompendiumBaseFeature.new
    end
  end
end
