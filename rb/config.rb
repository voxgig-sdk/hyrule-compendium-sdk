# HyruleCompendium SDK configuration

module HyruleCompendiumConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "HyruleCompendium",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://botw-compendium.herokuapp.com/api/v3",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "category" => {},
          "compendium_entry" => {},
          "master_mode" => {},
          "region" => {},
        },
      },
      "entity" => {
        "category" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "category",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "monsters",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "category",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/category/{category}",
                  "parts" => [
                    "category",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "category" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "compendium_entry" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "common_locations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "cooking_effect",
              "type" => "`$STRING`",
            },
            {
              "name" => "creatures",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "dlc",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "drops",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "edible",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "equipment",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "hearts_recovered",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "materials",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "monsters",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "treasure",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "compendium_entry",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "white-maned_lynel",
                        "kind" => "param",
                        "name" => "entry_id",
                        "orig" => "entry",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/entry/{entry}/image",
                  "parts" => [
                    "entry",
                    "{entry_id}",
                    "image",
                  ],
                  "rename" => {
                    "param" => {
                      "entry" => "entry_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "entry_id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "white-maned_lynel",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "entry",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/entry/{entry}",
                  "parts" => [
                    "entry",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "entry" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/all",
                  "parts" => [
                    "all",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "entry",
              ],
            ],
          },
        },
        "master_mode" => {
          "fields" => [
            {
              "name" => "category",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "common_locations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "cooking_effect",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "dlc",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "drops",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "edible",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "hearts_recovered",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "id",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
            },
          ],
          "name" => "master_mode",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "entry",
                        "orig" => "entry",
                        "reqd" => true,
                        "type" => "`$ANY`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/master_mode/entry/{entry}",
                  "parts" => [
                    "master_mode",
                    "entry",
                    "{entry}",
                  ],
                  "select" => {
                    "exist" => [
                      "entry",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "entry",
              ],
            ],
          },
        },
        "region" => {
          "fields" => [
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
          ],
          "name" => "region",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/regions",
                  "parts" => [
                    "regions",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "hyrule_field",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "region",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/region/{region}",
                  "parts" => [
                    "region",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "region" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    HyruleCompendiumFeatures.make_feature(name)
  end
end
