<?php
declare(strict_types=1);

// Typed models for the HyruleCompendium SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Category entity data model. */
class Category
{
    public ?array $data = null;
}

/** Request payload for Category#load. */
class CategoryLoadMatch
{
    public string $id;
}

/** CompendiumEntry entity data model. */
class CompendiumEntry
{
    public array $data;
}

/** Request payload for CompendiumEntry#load. */
class CompendiumEntryLoadMatch
{
    public string $entry_id;
    public string $id;
}

/** MasterMode entity data model. */
class MasterMode
{
    public array $data;
}

/** Request payload for MasterMode#load. */
class MasterModeLoadMatch
{
    public mixed $entry;
}

/** Region entity data model. */
class Region
{
    public ?array $data = null;
    public ?string $description = null;
    public ?string $name = null;
}

/** Request payload for Region#load. */
class RegionLoadMatch
{
    public string $id;
}

/** Match filter for Region#list (any subset of Region fields). */
class RegionListMatch
{
    public ?array $data = null;
    public ?string $description = null;
    public ?string $name = null;
}

