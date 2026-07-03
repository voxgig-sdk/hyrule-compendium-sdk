# HyruleCompendium SDK configuration


def make_config():
    return {
        "main": {
            "name": "HyruleCompendium",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://botw-compendium.herokuapp.com/api/v3",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "category": {},
                "compendium_entry": {},
                "master_mode": {},
                "region": {},
            },
        },
        "entity": {
      "category": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "category",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "monsters",
                      "kind": "param",
                      "name": "id",
                      "orig": "category",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/category/{category}",
                "parts": [
                  "category",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "compendium_entry": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "op": {
              "load": {
                "req": False,
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "compendium_entry",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "white-maned_lynel",
                      "kind": "param",
                      "name": "entry_id",
                      "orig": "entry",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/entry/{entry}/image",
                "parts": [
                  "entry",
                  "{entry_id}",
                  "image",
                ],
                "rename": {
                  "param": {
                    "entry": "entry_id",
                  },
                },
                "select": {
                  "exist": [
                    "entry_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "white-maned_lynel",
                      "kind": "param",
                      "name": "id",
                      "orig": "entry",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/entry/{entry}",
                "parts": [
                  "entry",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "entry": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/all",
                "parts": [
                  "all",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entry",
            ],
          ],
        },
      },
      "master_mode": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "master_mode",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "entry",
                      "orig": "entry",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/master_mode/entry/{entry}",
                "parts": [
                  "master_mode",
                  "entry",
                  "{entry}",
                ],
                "select": {
                  "exist": [
                    "entry",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "entry",
            ],
          ],
        },
      },
      "region": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "region",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/regions",
                "parts": [
                  "regions",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "hyrule_field",
                      "kind": "param",
                      "name": "id",
                      "orig": "region",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/region/{region}",
                "parts": [
                  "region",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "region": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
