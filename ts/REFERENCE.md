# HyruleCompendium TypeScript SDK Reference

Complete API reference for the HyruleCompendium TypeScript SDK.


## HyruleCompendiumSDK

### Constructor

```ts
new HyruleCompendiumSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HyruleCompendiumSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HyruleCompendiumSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HyruleCompendiumSDK` instance in test mode.


### Instance Methods

#### `Category(data?: object)`

Create a new `Category` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CategoryEntity` instance.

#### `CompendiumEntry(data?: object)`

Create a new `CompendiumEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompendiumEntryEntity` instance.

#### `MasterMode(data?: object)`

Create a new `MasterMode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MasterModeEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HyruleCompendiumSDK.test()`.

**Returns:** `HyruleCompendiumSDK` instance in test mode.


---

## CategoryEntity

```ts
const category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Category().load({ id: 'category_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `HyruleCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompendiumEntryEntity

```ts
const compendium_entry = client.CompendiumEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | Category of the entry |
| `common_locations` | `any[]` | No | Common locations where this entry can be found |
| `cooking_effect` | `string` | No | Cooking effect for food/material entries |
| `creatures` | `any[]` | No |  |
| `description` | `string` | No | Detailed description of the entry |
| `dlc` | `boolean` | No | Whether this entry is part of DLC content |
| `drops` | `any[]` | No | Items that can be dropped by this entry |
| `edible` | `boolean` | No | Whether this item is edible |
| `equipment` | `any[]` | No |  |
| `hearts_recovered` | `number` | No | Hearts recovered when consuming this item |
| `id` | `number` | Yes | Unique identifier for the entry |
| `image` | `string` | No | URL to the entry's image |
| `materials` | `any[]` | No |  |
| `monsters` | `any[]` | No |  |
| `name` | `string` | Yes | Name of the entry |
| `treasure` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CompendiumEntry().load({ id: 'compendium_entry_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompendiumEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `HyruleCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MasterModeEntity

```ts
const master_mode = client.MasterMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | Category of the entry |
| `common_locations` | `any[]` | No | Common locations where this entry can be found |
| `cooking_effect` | `string` | No | Cooking effect for food/material entries |
| `description` | `string` | No | Detailed description of the entry |
| `dlc` | `boolean` | No | Whether this entry is part of DLC content |
| `drops` | `any[]` | No | Items that can be dropped by this entry |
| `edible` | `boolean` | No | Whether this item is edible |
| `hearts_recovered` | `number` | No | Hearts recovered when consuming this item |
| `id` | `number` | Yes | Unique identifier for the entry |
| `image` | `string` | No | URL to the entry's image |
| `name` | `string` | Yes | Name of the entry |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MasterMode().load({ entry: 'entry' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MasterModeEntity` instance with the same client and
options.

#### `client()`

Return the parent `HyruleCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Description of the region |
| `name` | `string` | No | Name of the region |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Region().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Region().load({ id: 'region_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HyruleCompendiumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new HyruleCompendiumSDK({
  feature: {
    test: { active: true },
  }
})
```

