# HyruleCompendium Ruby SDK Reference

Complete API reference for the HyruleCompendium Ruby SDK.


## HyruleCompendiumSDK

### Constructor

```ruby
require_relative 'HyruleCompendium_sdk'

client = HyruleCompendiumSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HyruleCompendiumSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = HyruleCompendiumSDK.test
```


### Instance Methods

#### `Category(data = nil)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CompendiumEntry(data = nil)`

Create a new `CompendiumEntry` entity instance. Pass `nil` for no initial data.

#### `MasterMode(data = nil)`

Create a new `MasterMode` entity instance. Pass `nil` for no initial data.

#### `Region(data = nil)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CategoryEntity

```ruby
category = client.Category
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Category.load({ "id" => "category_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompendiumEntryEntity

```ruby
compendium_entry = client.CompendiumEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `data` | Yes |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CompendiumEntry.load({ "id" => "compendium_entry_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompendiumEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MasterModeEntity

```ruby
master_mode = client.MasterMode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MasterMode.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MasterModeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegionEntity

```ruby
region = client.Region
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No |  |
| `description` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Region.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Region.load({ "id" => "region_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = HyruleCompendiumSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

