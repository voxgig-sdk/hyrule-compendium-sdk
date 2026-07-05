# frozen_string_literal: true

# Typed models for the HyruleCompendium SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Category entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
Category = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Category#load.
#
# @!attribute [rw] id
#   @return [String]
CategoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# CompendiumEntry entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
CompendiumEntry = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for CompendiumEntry#load.
#
# @!attribute [rw] entry_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CompendiumEntryLoadMatch = Struct.new(
  :entry_id,
  :id,
  keyword_init: true
)

# MasterMode entity data model.
#
# @!attribute [rw] data
#   @return [Hash]
MasterMode = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for MasterMode#load.
#
# @!attribute [rw] entry
#   @return [Object]
MasterModeLoadMatch = Struct.new(
  :entry,
  keyword_init: true
)

# Region entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Region = Struct.new(
  :data,
  :description,
  :name,
  keyword_init: true
)

# Request payload for Region#load.
#
# @!attribute [rw] id
#   @return [String]
RegionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Region#list.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
RegionListMatch = Struct.new(
  :data,
  :description,
  :name,
  keyword_init: true
)

