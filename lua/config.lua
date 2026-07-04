-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "HyruleCompendium",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["active"] = true,
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
        },
        ["name"] = "category",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "monsters",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "category",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["compendium_entry"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "data",
            ["op"] = {
              ["load"] = {
                ["req"] = false,
                ["type"] = "`$OBJECT`",
              },
            },
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
        },
        ["name"] = "compendium_entry",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "white-maned_lynel",
                      ["kind"] = "param",
                      ["name"] = "entry_id",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
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
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "white-maned_lynel",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/all",
                ["parts"] = {
                  "all",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 2,
              },
            },
            ["key$"] = "load",
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
            ["active"] = true,
            ["name"] = "data",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
        },
        ["name"] = "master_mode",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "entry",
                      ["orig"] = "entry",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                      ["index$"] = 0,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
            ["active"] = true,
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "region",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/regions",
                ["parts"] = {
                  "regions",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "hyrule_field",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "region",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
