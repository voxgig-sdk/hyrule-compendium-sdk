<?php
declare(strict_types=1);

// HyruleCompendium SDK exists test

require_once __DIR__ . '/../hyrulecompendium_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HyruleCompendiumSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
