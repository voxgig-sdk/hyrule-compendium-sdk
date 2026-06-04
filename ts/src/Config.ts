
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://botw-compendium.herokuapp.com/api/v3',

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
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 0
        }
      ],
      "name": "category",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/category/{category}",
              "parts": [
                "category",
                "{id}"
              ],
              "rename": {
                "param": {
                  "category": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "compendium_entry": {
      "fields": [
        {
          "name": "data",
          "op": {
            "load": {
              "req": false,
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        }
      ],
      "name": "compendium_entry",
      "op": {
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/entry/{entry}/image",
              "parts": [
                "entry",
                "{entry_id}",
                "image"
              ],
              "rename": {
                "param": {
                  "entry": "entry_id"
                }
              },
              "select": {
                "exist": [
                  "entry_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/entry/{entry}",
              "parts": [
                "entry",
                "{id}"
              ],
              "rename": {
                "param": {
                  "entry": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 1
            },
            {
              "method": "GET",
              "orig": "/all",
              "parts": [
                "all"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            }
          ],
          "input": "data",
          "key$": "load"
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
          "name": "data",
          "req": true,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        }
      ],
      "name": "master_mode",
      "op": {
        "load": {
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
                    "type": "`$ANY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/master_mode/entry/{entry}",
              "parts": [
                "master_mode",
                "entry",
                "{entry}"
              ],
              "select": {
                "exist": [
                  "entry"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        }
      ],
      "name": "region",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "method": "GET",
              "orig": "/regions",
              "parts": [
                "regions"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
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
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/region/{region}",
              "parts": [
                "region",
                "{id}"
              ],
              "rename": {
                "param": {
                  "region": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
  config
}

