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
| `id` | `String` | No |  |

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
| `category` | `String` | Yes | Category of the entry |
| `common_locations` | `Array` | No | Common locations where this entry can be found |
| `cooking_effect` | `String` | No | Cooking effect for food/material entries |
| `creatures` | `Array` | No |  |
| `description` | `String` | No | Detailed description of the entry |
| `dlc` | `Boolean` | No | Whether this entry is part of DLC content |
| `drops` | `Array` | No | Items that can be dropped by this entry |
| `edible` | `Boolean` | No | Whether this item is edible |
| `equipment` | `Array` | No |  |
| `hearts_recovered` | `Float` | No | Hearts recovered when consuming this item |
| `id` | `Integer` | Yes | Unique identifier for the entry |
| `image` | `String` | No | URL to the entry's image |
| `materials` | `Array` | No |  |
| `monsters` | `Array` | No |  |
| `name` | `String` | Yes | Name of the entry |
| `treasure` | `Array` | No |  |

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
| `category` | `String` | Yes | Category of the entry |
| `common_locations` | `Array` | No | Common locations where this entry can be found |
| `cooking_effect` | `String` | No | Cooking effect for food/material entries |
| `description` | `String` | No | Detailed description of the entry |
| `dlc` | `Boolean` | No | Whether this entry is part of DLC content |
| `drops` | `Array` | No | Items that can be dropped by this entry |
| `edible` | `Boolean` | No | Whether this item is edible |
| `hearts_recovered` | `Float` | No | Hearts recovered when consuming this item |
| `id` | `Integer` | Yes | Unique identifier for the entry |
| `image` | `String` | No | URL to the entry's image |
| `name` | `String` | Yes | Name of the entry |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.MasterMode.load({ "entry" => "entry" })
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
| `description` | `String` | No | Description of the region |
| `id` | `String` | No |  |
| `name` | `String` | No | Name of the region |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

