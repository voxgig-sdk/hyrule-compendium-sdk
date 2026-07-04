// Typed models for the HyruleCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Category is the typed data model for the category entity.
type Category struct {
	Data *[]any `json:"data,omitempty"`
}

// CategoryLoadMatch is the typed request payload for Category.LoadTyped.
type CategoryLoadMatch struct {
	Id string `json:"id"`
}

// CompendiumEntry is the typed data model for the compendium_entry entity.
type CompendiumEntry struct {
	Data map[string]any `json:"data"`
}

// CompendiumEntryLoadMatch is the typed request payload for CompendiumEntry.LoadTyped.
type CompendiumEntryLoadMatch struct {
	EntryId string `json:"entry_id"`
	Id string `json:"id"`
}

// MasterMode is the typed data model for the master_mode entity.
type MasterMode struct {
	Data map[string]any `json:"data"`
}

// MasterModeLoadMatch is the typed request payload for MasterMode.LoadTyped.
type MasterModeLoadMatch struct {
	Entry any `json:"entry"`
}

// Region is the typed data model for the region entity.
type Region struct {
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
}

// RegionLoadMatch is the typed request payload for Region.LoadTyped.
type RegionLoadMatch struct {
	Id string `json:"id"`
}

// RegionListMatch mirrors the region fields as an all-optional match
// filter (Go analog of Partial<Region>).
type RegionListMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
