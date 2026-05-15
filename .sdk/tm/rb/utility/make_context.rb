# HyruleCompendium SDK utility: make_context
require_relative '../core/context'
module HyruleCompendiumUtilities
  MakeContext = ->(ctxmap, basectx) {
    HyruleCompendiumContext.new(ctxmap, basectx)
  }
end
