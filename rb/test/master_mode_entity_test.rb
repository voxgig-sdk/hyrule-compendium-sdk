# MasterMode entity test

require "minitest/autorun"
require "json"
require_relative "../HyruleCompendium_sdk"
require_relative "runner"

class MasterModeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = HyruleCompendiumSDK.test(nil, nil)
    ent = testsdk.MasterMode(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = master_mode_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "master_mode." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    master_mode_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.master_mode")))
    master_mode_ref01_data = nil
    if master_mode_ref01_data_raw.length > 0
      master_mode_ref01_data = Helpers.to_map(master_mode_ref01_data_raw[0][1])
    end

    # LOAD
    master_mode_ref01_ent = client.MasterMode(nil)
    master_mode_ref01_match_dt0 = {}
    master_mode_ref01_data_dt0_loaded = master_mode_ref01_ent.load(master_mode_ref01_match_dt0, nil)
    assert !master_mode_ref01_data_dt0_loaded.nil?

  end
end

def master_mode_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "master_mode", "MasterModeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = HyruleCompendiumSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["master_mode01", "master_mode02", "master_mode03", "entry01", "entry02", "entry03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID" => idmap,
    "HYRULECOMPENDIUM_TEST_LIVE" => "FALSE",
    "HYRULECOMPENDIUM_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["HYRULECOMPENDIUM_TEST_MASTER_MODE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["HYRULECOMPENDIUM_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = HyruleCompendiumSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["HYRULECOMPENDIUM_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["HYRULECOMPENDIUM_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
