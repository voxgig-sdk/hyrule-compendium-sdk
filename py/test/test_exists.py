# ProjectName SDK exists test

import pytest
from hyrulecompendium_sdk import HyruleCompendiumSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HyruleCompendiumSDK.test(None, None)
        assert testsdk is not None
