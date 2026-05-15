# HyruleCompendium SDK feature factory

from feature.base_feature import HyruleCompendiumBaseFeature
from feature.test_feature import HyruleCompendiumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HyruleCompendiumBaseFeature(),
        "test": lambda: HyruleCompendiumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
