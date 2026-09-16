

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HyruleCompendiumSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HYRULE_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('HYRULE_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HyruleCompendiumSDK.test()
    const ent = testsdk.Category()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HYRULE_COMPENDIUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'category.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"category","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"monsters","kind":"param","name":"id","orig":"category","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /category/{category}","json":"{\"operationId\":\"getCategory\",\"parameters\":[{\"description\":\"The category name (e.g., 'monsters', 'creatures', 'equipment', 'materials', 'treasure')\",\"example\":\"monsters\",\"in\":\"path\",\"name\":\"category\",\"required\":true,\"schema\":{\"enum\":[\"monsters\",\"creatures\",\"equipment\",\"materials\",\"treasure\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with category entries\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Category not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/category/{category}","rename":{"param":{"category":"id"}},"segments":[{"lit":"category"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"category","name__orig":"category","Name":"Category","name_":"category","name-":"category","NAME":"CATEGORY","index$":0}, {"active":true,"entity":"category","key$":"BasicCategoryFlow","kind":"basic","name":"BasicCategoryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"category_ref01","srcdatavar":"category_ref01_data","suffix":"_dt0"},"match":{"id":"category01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-category_ref01"}}],"index$":0}]}, 'Category')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let category_ref01_data = Object.values(setup.data.existing.category)[0] as any

    // LOAD
    const category_ref01_ent = client.Category()
    const category_ref01_match_dt0: any = {}
    category_ref01_match_dt0.id = category_ref01_data.id
    const category_ref01_data_dt0 = (await category_ref01_ent.load(category_ref01_match_dt0)).data()
    assert(category_ref01_data_dt0.id === category_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/category/CategoryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HyruleCompendiumSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['category01','category02','category03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HYRULE_COMPENDIUM_TEST_CATEGORY_ENTID': idmap,
    'HYRULE_COMPENDIUM_TEST_LIVE': 'FALSE',
    'HYRULE_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HYRULE_COMPENDIUM_TEST_CATEGORY_ENTID']

  const live = 'TRUE' === env.HYRULE_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HYRULE_COMPENDIUM_TEST_CATEGORY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HyruleCompendiumSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HYRULE_COMPENDIUM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
