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
  category: string
  common_locations?: any[]
  cooking_effect?: string
  creatures?: any[]
  description?: string
  dlc?: boolean
  drops?: any[]
  edible?: boolean
  equipment?: any[]
  hearts_recovered?: number
  id: number
  image?: string
  materials?: any[]
  monsters?: any[]
  name: string
  treasure?: any[]
}

export interface CompendiumEntryLoadMatch {
  entry_id?: string
  id?: string
}

export interface MasterMode {
  category: string
  common_locations?: any[]
  cooking_effect?: string
  description?: string
  dlc?: boolean
  drops?: any[]
  edible?: boolean
  hearts_recovered?: number
  id: number
  image?: string
  name: string
}

export interface MasterModeLoadMatch {
  entry: any
}

export interface Region {
  description?: string
  name?: string
}

export interface RegionLoadMatch {
  id: string
}

export interface RegionListMatch {
  description?: string
  name?: string
}

