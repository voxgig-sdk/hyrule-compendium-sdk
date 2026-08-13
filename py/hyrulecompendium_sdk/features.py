# HyruleCompendium SDK feature factory

from hyrulecompendium_sdk.feature.base_feature import HyruleCompendiumBaseFeature
from hyrulecompendium_sdk.feature.test_feature import HyruleCompendiumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HyruleCompendiumBaseFeature(),
        "test": lambda: HyruleCompendiumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
