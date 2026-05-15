
import { Context } from './Context'


class HyruleCompendiumError extends Error {

  isHyruleCompendiumError = true

  sdk = 'HyruleCompendium'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  HyruleCompendiumError
}

