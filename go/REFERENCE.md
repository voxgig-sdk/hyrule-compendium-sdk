# HyruleCompendium Golang SDK Reference

Complete API reference for the HyruleCompendium Golang SDK.


## HyruleCompendiumSDK

### Constructor

```go
func NewHyruleCompendiumSDK(options map[string]any) *HyruleCompendiumSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HyruleCompendiumSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HyruleCompendiumSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Category(data map[string]any) HyruleCompendiumEntity`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CompendiumEntry(data map[string]any) HyruleCompendiumEntity`

Create a new `CompendiumEntry` entity instance. Pass `nil` for no initial data.

#### `MasterMode(data map[string]any) HyruleCompendiumEntity`

Create a new `MasterMode` entity instance. Pass `nil` for no initial data.

#### `Region(data map[string]any) HyruleCompendiumEntity`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CategoryEntity

```go
category := client.Category(nil)
fmt.Println(category.GetName()) // "category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Category(nil).Load(map[string]any{"id": "category_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompendiumEntryEntity

```go
compendiumEntry := client.CompendiumEntry(nil)
fmt.Println(compendiumEntry.GetName()) // "compendium_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | Category of the entry |
| `common_locations` | `[]any` | No | Common locations where this entry can be found |
| `cooking_effect` | `string` | No | Cooking effect for food/material entries |
| `creatures` | `[]any` | No |  |
| `description` | `string` | No | Detailed description of the entry |
| `dlc` | `bool` | No | Whether this entry is part of DLC content |
| `drops` | `[]any` | No | Items that can be dropped by this entry |
| `edible` | `bool` | No | Whether this item is edible |
| `equipment` | `[]any` | No |  |
| `hearts_recovered` | `float64` | No | Hearts recovered when consuming this item |
| `id` | `int` | Yes | Unique identifier for the entry |
| `image` | `string` | No | URL to the entry's image |
| `materials` | `[]any` | No |  |
| `monsters` | `[]any` | No |  |
| `name` | `string` | Yes | Name of the entry |
| `treasure` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CompendiumEntry(nil).Load(map[string]any{"id": "compendium_entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompendiumEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MasterModeEntity

```go
masterMode := client.MasterMode(nil)
fmt.Println(masterMode.GetName()) // "master_mode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | Category of the entry |
| `common_locations` | `[]any` | No | Common locations where this entry can be found |
| `cooking_effect` | `string` | No | Cooking effect for food/material entries |
| `description` | `string` | No | Detailed description of the entry |
| `dlc` | `bool` | No | Whether this entry is part of DLC content |
| `drops` | `[]any` | No | Items that can be dropped by this entry |
| `edible` | `bool` | No | Whether this item is edible |
| `hearts_recovered` | `float64` | No | Hearts recovered when consuming this item |
| `id` | `int` | Yes | Unique identifier for the entry |
| `image` | `string` | No | URL to the entry's image |
| `name` | `string` | Yes | Name of the entry |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MasterMode(nil).Load(map[string]any{"entry": "entry"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MasterModeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegionEntity

```go
region := client.Region(nil)
fmt.Println(region.GetName()) // "region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Description of the region |
| `id` | `string` | No |  |
| `name` | `string` | No | Name of the region |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Region(nil).Load(map[string]any{"id": "region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewHyruleCompendiumSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

