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
    public ?string $id = null;
}

/** Request payload for Category#load. */
class CategoryLoadMatch
{
    public string $id;
}

/** CompendiumEntry entity data model. */
class CompendiumEntry
{
    public string $category;
    public ?array $common_locations = null;
    public ?string $cooking_effect = null;
    public ?array $creatures = null;
    public ?string $description = null;
    public ?bool $dlc = null;
    public ?array $drops = null;
    public ?bool $edible = null;
    public ?array $equipment = null;
    public ?float $hearts_recovered = null;
    public int $id;
    public ?string $image = null;
    public ?array $materials = null;
    public ?array $monsters = null;
    public string $name;
    public ?array $treasure = null;
}

/** Request payload for CompendiumEntry#load. */
class CompendiumEntryLoadMatch
{
    public string $id;
}

/** MasterMode entity data model. */
class MasterMode
{
    public string $category;
    public ?array $common_locations = null;
    public ?string $cooking_effect = null;
    public ?string $description = null;
    public ?bool $dlc = null;
    public ?array $drops = null;
    public ?bool $edible = null;
    public ?float $hearts_recovered = null;
    public int $id;
    public ?string $image = null;
    public string $name;
}

/** Request payload for MasterMode#load. */
class MasterModeLoadMatch
{
    public mixed $entry;
}

/** Region entity data model. */
class Region
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Region#load. */
class RegionLoadMatch
{
    public string $id;
}

/** Request payload for Region#list. */
class RegionListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

