# Typed models for the HyruleCompendium SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Category:
    data: Optional[list] = None


@dataclass
class CategoryLoadMatch:
    id: str


@dataclass
class CompendiumEntry:
    data: dict


@dataclass
class CompendiumEntryLoadMatch:
    entry_id: str
    id: str


@dataclass
class MasterMode:
    data: dict


@dataclass
class MasterModeLoadMatch:
    entry: Any


@dataclass
class Region:
    data: Optional[dict] = None
    description: Optional[str] = None
    name: Optional[str] = None


@dataclass
class RegionLoadMatch:
    id: str


@dataclass
class RegionListMatch:
    data: Optional[dict] = None
    description: Optional[str] = None
    name: Optional[str] = None

