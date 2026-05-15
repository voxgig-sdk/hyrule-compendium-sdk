# HyruleCompendium SDK utility: feature_add
module HyruleCompendiumUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
