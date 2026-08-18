# Typed models for the HyruleCompendium SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Category(TypedDict, total=False):
    data: list


class CategoryLoadMatch(TypedDict):
    id: str


class CompendiumEntryRequired(TypedDict):
    category: str
    id: int
    name: str


class CompendiumEntry(CompendiumEntryRequired, total=False):
    common_locations: list
    cooking_effect: str
    creatures: list
    description: str
    dlc: bool
    drops: list
    edible: bool
    equipment: list
    hearts_recovered: float
    image: str
    materials: list
    monsters: list
    treasure: list


class CompendiumEntryLoadMatch(TypedDict):
    id: str


class MasterModeRequired(TypedDict):
    category: str
    id: int
    name: str


class MasterMode(MasterModeRequired, total=False):
    common_locations: list
    cooking_effect: str
    description: str
    dlc: bool
    drops: list
    edible: bool
    hearts_recovered: float
    image: str


class MasterModeLoadMatch(TypedDict):
    entry: Any


class Region(TypedDict, total=False):
    description: str
    name: str


class RegionLoadMatch(TypedDict):
    id: str


class RegionListMatch(TypedDict, total=False):
    description: str
    name: str
