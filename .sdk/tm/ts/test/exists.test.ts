
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HyruleCompendiumSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HyruleCompendiumSDK.test()
    equal(null !== testsdk, true)
  })

})
