package = "voxgig-sdk-hyrule-compendium"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/hyrule-compendium-sdk.git"
}
description = {
  summary = "HyruleCompendium SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["hyrule-compendium_sdk"] = "hyrule-compendium_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
