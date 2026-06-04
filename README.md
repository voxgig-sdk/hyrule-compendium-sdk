# HyruleCompendium SDK

Look up items, creatures, monsters, treasures, equipment, materials, and regions from Breath of the Wild and Tears of the Kingdom

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Hyrule Compendium API

The Hyrule Compendium API is a community-built JSON API that mirrors the in-game compendium from *The Legend of Zelda: Breath of the Wild* and *Tears of the Kingdom*. It is maintained by [gadhagod](https://github.com/gadhagod/Hyrule-Compendium-API) and hosted on Heroku at `https://botw-compendium.herokuapp.com/api/v3`.

What you get from the API:
- Individual compendium entries by name or id, with description, common locations, drops, and image URL
- Entries grouped by category (creatures, monsters, materials, equipment, treasure)
- Master Mode data exclusive to the Breath of the Wild expansion
- Regions of Hyrule with associated metadata

The API is read-only and requires no authentication or API key. CORS support varies per endpoint, and because the service is on a free Heroku tier it can be slow to wake from idle or intermittently unavailable.

## Try it

**TypeScript**
```bash
npm install hyrule-compendium
```

**Python**
```bash
pip install hyrule-compendium-sdk
```

**PHP**
```bash
composer require voxgig/hyrule-compendium-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/hyrule-compendium-sdk/go
```

**Ruby**
```bash
gem install hyrule-compendium-sdk
```

**Lua**
```bash
luarocks install hyrule-compendium-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { HyruleCompendiumSDK } from 'hyrule-compendium'

const client = new HyruleCompendiumSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o hyrule-compendium-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "hyrule-compendium": {
      "command": "/abs/path/to/hyrule-compendium-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Category** | A grouping of compendium entries (creatures, monsters, materials, equipment, treasure); fetch all entries in a category via `/compendium/category/{category}`. | `/category/{category}` |
| **CompendiumEntry** | A single item, creature, monster, or piece of equipment with name, id, description, common_locations, drops and image; retrievable via `/compendium/entry/{name-or-id}`. | `/entry/{entry}/image` |
| **MasterMode** | Entries specific to Breath of the Wild's Master Mode expansion, exposing the harder-difficulty variants of creatures and monsters. | `/master_mode/entry/{entry}` |
| **Region** | A named area of Hyrule with metadata describing where compendium entries can be found. | `/regions` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from hyrulecompendium_sdk import HyruleCompendiumSDK

client = HyruleCompendiumSDK({})


# Load a specific category
category, err = client.Category(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'hyrulecompendium_sdk.php';

$client = new HyruleCompendiumSDK([]);


// Load a specific category
[$category, $err] = $client->Category(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/hyrule-compendium-sdk/go"

client := sdk.NewHyruleCompendiumSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "HyruleCompendium_sdk"

client = HyruleCompendiumSDK.new({})


# Load a specific category
category, err = client.Category(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("hyrule-compendium_sdk")

local client = sdk.new({})


-- Load a specific category
local category, err = client:Category(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = HyruleCompendiumSDK.test()
const result = await client.Category().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = HyruleCompendiumSDK.test(None, None)
result, err = client.Category(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = HyruleCompendiumSDK::test(null, null);
[$result, $err] = $client->Category(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = HyruleCompendiumSDK.test(nil, nil)
result, err = client.Category(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Category(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Hyrule Compendium API

- Upstream: [https://gadhagod.github.io/Hyrule-Compendium-API/](https://gadhagod.github.io/Hyrule-Compendium-API/)

- Source code is released under the MIT License.
- Game content (item names, descriptions, images) is the property of Nintendo; this is an unofficial fan project not affiliated with or endorsed by Nintendo.
- Credit the project (gadhagod/Hyrule-Compendium-API) when redistributing data.

---

Generated from the Hyrule Compendium API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
