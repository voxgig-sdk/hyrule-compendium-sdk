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
#
# @!attribute [rw] id
#   @return [String, nil]
Category = Struct.new(
  :data,
  :id,
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
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] common_locations
#   @return [Array, nil]
#
# @!attribute [rw] cooking_effect
#   @return [String, nil]
#
# @!attribute [rw] creatures
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dlc
#   @return [Boolean, nil]
#
# @!attribute [rw] drops
#   @return [Array, nil]
#
# @!attribute [rw] edible
#   @return [Boolean, nil]
#
# @!attribute [rw] equipment
#   @return [Array, nil]
#
# @!attribute [rw] hearts_recovered
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] materials
#   @return [Array, nil]
#
# @!attribute [rw] monsters
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] treasure
#   @return [Array, nil]
CompendiumEntry = Struct.new(
  :category,
  :common_locations,
  :cooking_effect,
  :creatures,
  :description,
  :dlc,
  :drops,
  :edible,
  :equipment,
  :hearts_recovered,
  :id,
  :image,
  :materials,
  :monsters,
  :name,
  :treasure,
  keyword_init: true
)

# Request payload for CompendiumEntry#load.
#
# @!attribute [rw] id
#   @return [String]
CompendiumEntryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# MasterMode entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] common_locations
#   @return [Array, nil]
#
# @!attribute [rw] cooking_effect
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dlc
#   @return [Boolean, nil]
#
# @!attribute [rw] drops
#   @return [Array, nil]
#
# @!attribute [rw] edible
#   @return [Boolean, nil]
#
# @!attribute [rw] hearts_recovered
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
MasterMode = Struct.new(
  :category,
  :common_locations,
  :cooking_effect,
  :description,
  :dlc,
  :drops,
  :edible,
  :hearts_recovered,
  :id,
  :image,
  :name,
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
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Region = Struct.new(
  :description,
  :id,
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
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
RegionListMatch = Struct.new(
  :description,
  :id,
  :name,
  keyword_init: true
)

