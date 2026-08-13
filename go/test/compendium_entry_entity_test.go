package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hyrule-compendium-sdk/go"
	"github.com/voxgig-sdk/hyrule-compendium-sdk/go/core"

	vs "github.com/voxgig-sdk/hyrule-compendium-sdk/go/utility/struct"
)

func TestCompendiumEntryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CompendiumEntry(nil)
		if ent == nil {
			t.Fatal("expected non-nil CompendiumEntryEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := compendium_entryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "compendium_entry." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		compendiumEntryRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.compendium_entry", setup.data)))
		var compendiumEntryRef01Data map[string]any
		if len(compendiumEntryRef01DataRaw) > 0 {
			compendiumEntryRef01Data = core.ToMapAny(compendiumEntryRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = compendiumEntryRef01Data

		// LOAD
		compendiumEntryRef01Ent := client.CompendiumEntry(nil)
		compendiumEntryRef01MatchDt0 := map[string]any{
			"id": compendiumEntryRef01Data["id"],
		}
		compendiumEntryRef01DataDt0Loaded, err := compendiumEntryRef01Ent.Load(compendiumEntryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		compendiumEntryRef01DataDt0LoadResult := core.ToMapAny(entityData(compendiumEntryRef01DataDt0Loaded))
		if compendiumEntryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if compendiumEntryRef01DataDt0LoadResult["id"] != compendiumEntryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func compendium_entryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "compendium_entry", "CompendiumEntryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read compendium_entry test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse compendium_entry test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"compendium_entry01", "compendium_entry02", "compendium_entry03", "entry01", "entry02", "entry03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID": idmap,
		"HYRULE_COMPENDIUM_TEST_LIVE":      "FALSE",
		"HYRULE_COMPENDIUM_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HYRULE_COMPENDIUM_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewHyruleCompendiumSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HYRULE_COMPENDIUM_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HYRULE_COMPENDIUM_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
