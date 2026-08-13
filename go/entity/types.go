// Typed models for the HyruleCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hyrule-compendium-sdk/go/core"
)

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
	Category string `json:"category"`
	CommonLocations *[]any `json:"common_locations,omitempty"`
	CookingEffect *string `json:"cooking_effect,omitempty"`
	Creatures *[]any `json:"creatures,omitempty"`
	Description *string `json:"description,omitempty"`
	Dlc *bool `json:"dlc,omitempty"`
	Drops *[]any `json:"drops,omitempty"`
	Edible *bool `json:"edible,omitempty"`
	Equipment *[]any `json:"equipment,omitempty"`
	HeartsRecovered *float64 `json:"hearts_recovered,omitempty"`
	Id int `json:"id"`
	Image *string `json:"image,omitempty"`
	Materials *[]any `json:"materials,omitempty"`
	Monsters *[]any `json:"monsters,omitempty"`
	Name string `json:"name"`
	Treasure *[]any `json:"treasure,omitempty"`
}

// CompendiumEntryLoadMatch is the typed request payload for CompendiumEntry.LoadTyped.
type CompendiumEntryLoadMatch struct {
	EntryId *string `json:"entry_id,omitempty"`
	Id *string `json:"id,omitempty"`
}

// MasterMode is the typed data model for the master_mode entity.
type MasterMode struct {
	Category string `json:"category"`
	CommonLocations *[]any `json:"common_locations,omitempty"`
	CookingEffect *string `json:"cooking_effect,omitempty"`
	Description *string `json:"description,omitempty"`
	Dlc *bool `json:"dlc,omitempty"`
	Drops *[]any `json:"drops,omitempty"`
	Edible *bool `json:"edible,omitempty"`
	HeartsRecovered *float64 `json:"hearts_recovered,omitempty"`
	Id int `json:"id"`
	Image *string `json:"image,omitempty"`
	Name string `json:"name"`
}

// MasterModeLoadMatch is the typed request payload for MasterMode.LoadTyped.
type MasterModeLoadMatch struct {
	Entry any `json:"entry"`
}

// Region is the typed data model for the region entity.
type Region struct {
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
}

// RegionLoadMatch is the typed request payload for Region.LoadTyped.
type RegionLoadMatch struct {
	Id string `json:"id"`
}

// RegionListMatch is the typed request payload for Region.ListTyped.
type RegionListMatch struct {
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
