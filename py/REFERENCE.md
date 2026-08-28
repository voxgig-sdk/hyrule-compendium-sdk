# HyruleCompendium Python SDK Reference

Complete API reference for the HyruleCompendium Python SDK.


## HyruleCompendiumSDK

### Constructor

```python
from hyrulecompendium_sdk import HyruleCompendiumSDK

client = HyruleCompendiumSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HyruleCompendiumSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HyruleCompendiumSDK.test()
```


### Instance Methods

#### `Category(data=None)`

Create a new `CategoryEntity` instance. Pass `None` for no initial data.

#### `CompendiumEntry(data=None)`

Create a new `CompendiumEntryEntity` instance. Pass `None` for no initial data.

#### `MasterMode(data=None)`

Create a new `MasterModeEntity` instance. Pass `None` for no initial data.

#### `Region(data=None)`

Create a new `RegionEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CategoryEntity

```python
category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Category().load({"id": "category_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompendiumEntryEntity

```python
compendium_entry = client.CompendiumEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes | Category of the entry |
| `common_locations` | `list` | No | Common locations where this entry can be found |
| `cooking_effect` | `str` | No | Cooking effect for food/material entries |
| `creatures` | `list` | No |  |
| `description` | `str` | No | Detailed description of the entry |
| `dlc` | `bool` | No | Whether this entry is part of DLC content |
| `drops` | `list` | No | Items that can be dropped by this entry |
| `edible` | `bool` | No | Whether this item is edible |
| `equipment` | `list` | No |  |
| `hearts_recovered` | `float` | No | Hearts recovered when consuming this item |
| `id` | `int` | Yes | Unique identifier for the entry |
| `image` | `str` | No | URL to the entry's image |
| `materials` | `list` | No |  |
| `monsters` | `list` | No |  |
| `name` | `str` | Yes | Name of the entry |
| `treasure` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CompendiumEntry().load({"id": "compendium_entry_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompendiumEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MasterModeEntity

```python
master_mode = client.MasterMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes | Category of the entry |
| `common_locations` | `list` | No | Common locations where this entry can be found |
| `cooking_effect` | `str` | No | Cooking effect for food/material entries |
| `description` | `str` | No | Detailed description of the entry |
| `dlc` | `bool` | No | Whether this entry is part of DLC content |
| `drops` | `list` | No | Items that can be dropped by this entry |
| `edible` | `bool` | No | Whether this item is edible |
| `hearts_recovered` | `float` | No | Hearts recovered when consuming this item |
| `id` | `int` | Yes | Unique identifier for the entry |
| `image` | `str` | No | URL to the entry's image |
| `name` | `str` | Yes | Name of the entry |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MasterMode().load({"entry": "entry"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MasterModeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegionEntity

```python
region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Description of the region |
| `id` | `str` | No |  |
| `name` | `str` | No | Name of the region |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Region().list()
for region in results:
    print(region)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Region().load({"id": "region_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = HyruleCompendiumSDK({
    "feature": {
        "test": {"active": True},
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

