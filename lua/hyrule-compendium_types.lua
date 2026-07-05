-- Typed models for the HyruleCompendium SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Category
---@field data? table

---@class CategoryLoadMatch
---@field id string

---@class CompendiumEntry
---@field data table

---@class CompendiumEntryLoadMatch
---@field entry_id string
---@field id string

---@class MasterMode
---@field data table

---@class MasterModeLoadMatch
---@field entry any

---@class Region
---@field data? table
---@field description? string
---@field name? string

---@class RegionLoadMatch
---@field id string

---@class RegionListMatch
---@field data? table
---@field description? string
---@field name? string

local M = {}

return M
