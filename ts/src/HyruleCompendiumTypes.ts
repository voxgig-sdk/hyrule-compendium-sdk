// Typed models for the HyruleCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Category {
  data?: any[]
}

export interface CategoryLoadMatch {
  id: string
}

export interface CompendiumEntry {
  data: Record<string, any>
}

export interface CompendiumEntryLoadMatch {
  entry_id?: string
  id?: string
}

export interface MasterMode {
  data: Record<string, any>
}

export interface MasterModeLoadMatch {
  entry: any
}

export interface Region {
  data?: Record<string, any>
  description?: string
  name?: string
}

export interface RegionLoadMatch {
  id: string
}

export interface RegionListMatch {
  data?: Record<string, any>
  description?: string
  name?: string
}

