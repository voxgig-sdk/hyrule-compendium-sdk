<?php
declare(strict_types=1);

// MasterMode entity test

require_once __DIR__ . '/../hyrulecompendium_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class MasterModeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HyruleCompendiumSDK::test(null, null);
        $ent = $testsdk->MasterMode(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = master_mode_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "master_mode." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $master_mode_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.master_mode")));
        $master_mode_ref01_data = null;
        if (count($master_mode_ref01_data_raw) > 0) {
            $master_mode_ref01_data = Helpers::to_map($master_mode_ref01_data_raw[0][1]);
        }

        // LOAD
        $master_mode_ref01_ent = $client->MasterMode(null);
        $master_mode_ref01_match_dt0 = [];
        $master_mode_ref01_data_dt0_loaded = $master_mode_ref01_ent->load($master_mode_ref01_match_dt0, null);
        $this->assertNotNull($master_mode_ref01_data_dt0_loaded);

    }
}

function master_mode_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/master_mode/MasterModeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HyruleCompendiumSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["master_mode01", "master_mode02", "master_mode03", "entry01", "entry02", "entry03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID" => $idmap,
        "HYRULECOMPENDIUM_TEST_LIVE" => "FALSE",
        "HYRULECOMPENDIUM_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HYRULECOMPENDIUM_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new HyruleCompendiumSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["HYRULECOMPENDIUM_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HYRULECOMPENDIUM_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
