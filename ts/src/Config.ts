
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HyruleCompendium',
        slug: "hyrule-compendium",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://botw-compendium.herokuapp.com/api/v3",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      category: {
      },

      compendium_entry: {
      },

      master_mode: {
      },

      region: {
      },

    }
  }


  entity = {
    "category": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "category",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "monsters",
                    "kind": "param",
                    "name": "id",
                    "orig": "category",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/category/{category}",
              "rename": {
                "param": {
                  "category": "id"
                }
              },
              "segments": [
                {
                  "lit": "category"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "category",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "compendium_entry": {
      "fields": [
        {
          "name": "category",
          "req": true,
          "short": "Category of the entry",
          "type": "`$STRING`"
        },
        {
          "name": "common_locations",
          "short": "Common locations where this entry can be found",
          "type": "`$ARRAY`"
        },
        {
          "name": "cooking_effect",
          "short": "Cooking effect for food/material entries",
          "type": "`$STRING`"
        },
        {
          "name": "creatures",
          "type": "`$ARRAY`"
        },
        {
          "name": "description",
          "short": "Detailed description of the entry",
          "type": "`$STRING`"
        },
        {
          "name": "dlc",
          "short": "Whether this entry is part of DLC content",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "drops",
          "short": "Items that can be dropped by this entry",
          "type": "`$ARRAY`"
        },
        {
          "name": "edible",
          "short": "Whether this item is edible",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "equipment",
          "type": "`$ARRAY`"
        },
        {
          "name": "hearts_recovered",
          "short": "Hearts recovered when consuming this item",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the entry",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "image",
          "short": "URL to the entry's image",
          "type": "`$STRING`"
        },
        {
          "name": "materials",
          "type": "`$ARRAY`"
        },
        {
          "name": "monsters",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the entry",
          "type": "`$STRING`"
        },
        {
          "name": "treasure",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "compendium_entry",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "white-maned_lynel",
                    "kind": "param",
                    "name": "entry_id",
                    "orig": "entry",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/entry/{entry}/image",
              "rename": {
                "param": {
                  "entry": "entry_id"
                }
              },
              "segments": [
                {
                  "lit": "entry"
                },
                {
                  "var": "entry_id"
                },
                {
                  "lit": "image"
                }
              ],
              "select": {
                "exist": [
                  "entry_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "entry",
                "{entry_id}",
                "image"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "white-maned_lynel",
                    "kind": "param",
                    "name": "id",
                    "orig": "entry",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/entry/{entry}",
              "rename": {
                "param": {
                  "entry": "id"
                }
              },
              "segments": [
                {
                  "lit": "entry"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "entry",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/all",
              "segments": [
                {
                  "lit": "all"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "all"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "entry"
          ]
        ]
      }
    },
    "master_mode": {
      "fields": [
        {
          "name": "category",
          "req": true,
          "short": "Category of the entry",
          "type": "`$STRING`"
        },
        {
          "name": "common_locations",
          "short": "Common locations where this entry can be found",
          "type": "`$ARRAY`"
        },
        {
          "name": "cooking_effect",
          "short": "Cooking effect for food/material entries",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed description of the entry",
          "type": "`$STRING`"
        },
        {
          "name": "dlc",
          "short": "Whether this entry is part of DLC content",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "drops",
          "short": "Items that can be dropped by this entry",
          "type": "`$ARRAY`"
        },
        {
          "name": "edible",
          "short": "Whether this item is edible",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "hearts_recovered",
          "short": "Hearts recovered when consuming this item",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the entry",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "image",
          "short": "URL to the entry's image",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Name of the entry",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "master_mode",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "entry",
                    "orig": "entry",
                    "reqd": true,
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/master_mode/entry/{entry}",
              "segments": [
                {
                  "lit": "master_mode"
                },
                {
                  "lit": "entry"
                },
                {
                  "var": "entry"
                }
              ],
              "select": {
                "exist": [
                  "entry"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "master_mode",
                "entry",
                "{entry}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "entry"
          ]
        ]
      }
    },
    "region": {
      "fields": [
        {
          "name": "description",
          "short": "Description of the region",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the region",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "region",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/regions",
              "segments": [
                {
                  "lit": "regions"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "regions"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "hyrule_field",
                    "kind": "param",
                    "name": "id",
                    "orig": "region",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/region/{region}",
              "rename": {
                "param": {
                  "region": "id"
                }
              },
              "segments": [
                {
                  "lit": "region"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "region",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

