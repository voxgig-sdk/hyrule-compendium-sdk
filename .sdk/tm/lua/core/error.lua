-- HyruleCompendium SDK error

local HyruleCompendiumError = {}
HyruleCompendiumError.__index = HyruleCompendiumError


function HyruleCompendiumError.new(code, msg, ctx)
  local self = setmetatable({}, HyruleCompendiumError)
  self.is_sdk_error = true
  self.sdk = "HyruleCompendium"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HyruleCompendiumError:error()
  return self.msg
end


function HyruleCompendiumError:__tostring()
  return self.msg
end


return HyruleCompendiumError
