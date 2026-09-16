# HyruleCompendium SDK feature factory

from hyrulecompendium_sdk.feature.base_feature import HyruleCompendiumBaseFeature
from hyrulecompendium_sdk.feature.ratelimit_feature import HyruleCompendiumRatelimitFeature
from hyrulecompendium_sdk.feature.retry_feature import HyruleCompendiumRetryFeature
from hyrulecompendium_sdk.feature.test_feature import HyruleCompendiumTestFeature
from hyrulecompendium_sdk.feature.timeout_feature import HyruleCompendiumTimeoutFeature


_FEATURES = {
    "base": lambda: HyruleCompendiumBaseFeature(),
    "ratelimit": lambda: HyruleCompendiumRatelimitFeature(),
    "retry": lambda: HyruleCompendiumRetryFeature(),
    "test": lambda: HyruleCompendiumTestFeature(),
    "timeout": lambda: HyruleCompendiumTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
