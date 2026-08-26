-- HyruleCompendium SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HyruleCompendium",
      slug = "hyrule-compendium",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://botw-compendium.herokuapp.com/api/v3",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["category"] = {},
        ["compendium_entry"] = {},
        ["master_mode"] = {},
        ["region"] = {},
      },
    },
    entity = {
      ["category"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "category",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "monsters",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "category",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/category/{category}",
                ["parts"] = {
                  "category",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["category"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["compendium_entry"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "Category of the entry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "common_locations",
            ["short"] = "Common locations where this entry can be found",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "cooking_effect",
            ["short"] = "Cooking effect for food/material entries",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "creatures",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "description",
            ["short"] = "Detailed description of the entry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dlc",
            ["short"] = "Whether this entry is part of DLC content",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "drops",
            ["short"] = "Items that can be dropped by this entry",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "edible",
            ["short"] = "Whether this item is edible",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "equipment",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hearts_recovered",
            ["short"] = "Hearts recovered when consuming this item",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the entry",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to the entry's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "materials",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "monsters",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "Name of the entry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "treasure",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "compendium_entry",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "white-maned_lynel",
                      ["kind"] = "param",
                      ["name"] = "entry_id",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/entry/{entry}/image",
                ["parts"] = {
                  "entry",
                  "{entry_id}",
                  "image",
                },
                ["rename"] = {
                  ["param"] = {
                    ["entry"] = "entry_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "entry_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "white-maned_lynel",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/entry/{entry}",
                ["parts"] = {
                  "entry",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["entry"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/all",
                ["parts"] = {
                  "all",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entry",
            },
          },
        },
      },
      ["master_mode"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "Category of the entry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "common_locations",
            ["short"] = "Common locations where this entry can be found",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "cooking_effect",
            ["short"] = "Cooking effect for food/material entries",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Detailed description of the entry",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dlc",
            ["short"] = "Whether this entry is part of DLC content",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "drops",
            ["short"] = "Items that can be dropped by this entry",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "edible",
            ["short"] = "Whether this item is edible",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "hearts_recovered",
            ["short"] = "Hearts recovered when consuming this item",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the entry",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to the entry's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "Name of the entry",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "master_mode",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "entry",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/master_mode/entry/{entry}",
                ["parts"] = {
                  "master_mode",
                  "entry",
                  "{entry}",
                },
                ["select"] = {
                  ["exist"] = {
                    "entry",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "entry",
            },
          },
        },
      },
      ["region"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Description of the region",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the region",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "region",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/regions",
                ["parts"] = {
                  "regions",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "hyrule_field",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "region",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/region/{region}",
                ["parts"] = {
                  "region",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["region"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
