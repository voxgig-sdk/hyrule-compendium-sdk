# HyruleCompendium TypeScript SDK



The TypeScript SDK for the HyruleCompendium API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Category()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hyrule-compendium-sdk/releases](https://github.com/voxgig-sdk/hyrule-compendium-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { HyruleCompendiumSDK } from '@voxgig-sdk/hyrule-compendium'

const client = new HyruleCompendiumSDK()
```

### 3. Load a mastermode

MasterMode is nested under entry, so provide the `entry`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const mastermode = await client.MasterMode().load({
    entry: 'example_entry',
  })
  console.log(mastermode)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const mastermode = await client.MasterMode().load({ entry: "example" })
  console.log(mastermode)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = HyruleCompendiumSDK.test()

const mastermode = await client.MasterMode().load({ entry: 'example_entry' })
// mastermode is the entity, populated with mock response data
// — call mastermode.data() for the record itself
console.log(mastermode)
```

You can also use the instance method:

```ts
const client = new HyruleCompendiumSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.MasterMode()

// First call runs the operation and stores its result
await entity.load({ entry: 'example_entry' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HyruleCompendiumSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HYRULE_COMPENDIUM_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### HyruleCompendiumSDK

#### Constructor

```ts
new HyruleCompendiumSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Category(data?)` | `CategoryEntity` | Create a Category entity instance. |
| `CompendiumEntry(data?)` | `CompendiumEntryEntity` | Create a CompendiumEntry entity instance. |
| `MasterMode(data?)` | `MasterModeEntity` | Create a MasterMode entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `tester(testopts?, sdkopts?)` | `HyruleCompendiumSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HyruleCompendiumSDK.test(testopts?, sdkopts?)` | `HyruleCompendiumSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HyruleCompendiumSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Category

| Field | Description |
| --- | --- |
| `data` |  |
| `id` |  |

Operations: load.

API path: `/category/{category}`

#### CompendiumEntry

| Field | Description |
| --- | --- |
| `category` | Category of the entry |
| `common_locations` | Common locations where this entry can be found |
| `cooking_effect` | Cooking effect for food/material entries |
| `creatures` |  |
| `description` | Detailed description of the entry |
| `dlc` | Whether this entry is part of DLC content |
| `drops` | Items that can be dropped by this entry |
| `edible` | Whether this item is edible |
| `equipment` |  |
| `hearts_recovered` | Hearts recovered when consuming this item |
| `id` | Unique identifier for the entry |
| `image` | URL to the entry's image |
| `materials` |  |
| `monsters` |  |
| `name` | Name of the entry |
| `treasure` |  |

Operations: load.

API path: `/entry/{entry}/image`

#### MasterMode

| Field | Description |
| --- | --- |
| `category` | Category of the entry |
| `common_locations` | Common locations where this entry can be found |
| `cooking_effect` | Cooking effect for food/material entries |
| `description` | Detailed description of the entry |
| `dlc` | Whether this entry is part of DLC content |
| `drops` | Items that can be dropped by this entry |
| `edible` | Whether this item is edible |
| `hearts_recovered` | Hearts recovered when consuming this item |
| `id` | Unique identifier for the entry |
| `image` | URL to the entry's image |
| `name` | Name of the entry |

Operations: load.

API path: `/master_mode/entry/{entry}`

#### Region

| Field | Description |
| --- | --- |
| `description` | Description of the region |
| `id` |  |
| `name` | Name of the region |

Operations: list, load.

API path: `/regions`



## Entities


### Category

Create an instance: `const category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `id` | `string` |  |

#### Example: Load

```ts
const category = await client.Category().load({ id: 'category_id' })
```


### CompendiumEntry

Create an instance: `const compendium_entry = client.CompendiumEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | Category of the entry |
| `common_locations` | `any[]` | Common locations where this entry can be found |
| `cooking_effect` | `string` | Cooking effect for food/material entries |
| `creatures` | `any[]` |  |
| `description` | `string` | Detailed description of the entry |
| `dlc` | `boolean` | Whether this entry is part of DLC content |
| `drops` | `any[]` | Items that can be dropped by this entry |
| `edible` | `boolean` | Whether this item is edible |
| `equipment` | `any[]` |  |
| `hearts_recovered` | `number` | Hearts recovered when consuming this item |
| `id` | `number` | Unique identifier for the entry |
| `image` | `string` | URL to the entry's image |
| `materials` | `any[]` |  |
| `monsters` | `any[]` |  |
| `name` | `string` | Name of the entry |
| `treasure` | `any[]` |  |

#### Example: Load

```ts
const compendium_entry = await client.CompendiumEntry().load({ id: 'compendium_entry_id' })
```


### MasterMode

Create an instance: `const master_mode = client.MasterMode()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | Category of the entry |
| `common_locations` | `any[]` | Common locations where this entry can be found |
| `cooking_effect` | `string` | Cooking effect for food/material entries |
| `description` | `string` | Detailed description of the entry |
| `dlc` | `boolean` | Whether this entry is part of DLC content |
| `drops` | `any[]` | Items that can be dropped by this entry |
| `edible` | `boolean` | Whether this item is edible |
| `hearts_recovered` | `number` | Hearts recovered when consuming this item |
| `id` | `number` | Unique identifier for the entry |
| `image` | `string` | URL to the entry's image |
| `name` | `string` | Name of the entry |

#### Example: Load

```ts
const master_mode = await client.MasterMode().load({ entry: 'entry' })
```


### Region

Create an instance: `const region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the region |
| `id` | `string` |  |
| `name` | `string` | Name of the region |

#### Example: Load

```ts
const region = await client.Region().load({ id: 'region_id' })
```

#### Example: List

```ts
const regions = await client.Region().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
hyrule-compendium/
├── src/
│   ├── HyruleCompendiumSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { HyruleCompendiumSDK } from '@voxgig-sdk/hyrule-compendium'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const mastermode = client.MasterMode()
await mastermode.load({ entry: "example" })

// mastermode.data() now returns the mastermode data from the last `load`
// mastermode.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
