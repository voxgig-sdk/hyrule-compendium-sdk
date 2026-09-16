

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


describe('CompendiumEntryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HYRULE_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('HYRULE_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HyruleCompendiumSDK.test()
    const ent = testsdk.CompendiumEntry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HYRULE_COMPENDIUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'compendium_entry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":true,"short":"Category of the entry","type":"`$STRING`","index$":0},{"active":true,"name":"common_locations","req":false,"short":"Common locations where this entry can be found","type":"`$ARRAY`","index$":1},{"active":true,"name":"cooking_effect","req":false,"short":"Cooking effect for food/material entries","type":"`$STRING`","index$":2},{"active":true,"name":"creatures","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"description","req":false,"short":"Detailed description of the entry","type":"`$STRING`","index$":4},{"active":true,"name":"dlc","req":false,"short":"Whether this entry is part of DLC content","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"drops","req":false,"short":"Items that can be dropped by this entry","type":"`$ARRAY`","index$":6},{"active":true,"name":"edible","req":false,"short":"Whether this item is edible","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"equipment","req":false,"type":"`$ARRAY`","index$":8},{"active":true,"name":"hearts_recovered","req":false,"short":"Hearts recovered when consuming this item","type":"`$NUMBER`","index$":9},{"active":true,"name":"id","req":true,"short":"Unique identifier for the entry","type":"`$INTEGER`","index$":10},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the entry's image","type":"`$STRING`","index$":11},{"active":true,"name":"materials","req":false,"type":"`$ARRAY`","index$":12},{"active":true,"name":"monsters","req":false,"type":"`$ARRAY`","index$":13},{"active":true,"name":"name","req":true,"short":"Name of the entry","type":"`$STRING`","index$":14},{"active":true,"name":"treasure","req":false,"type":"`$ARRAY`","index$":15}],"id":{"field":"id","name":"id"},"name":"compendium_entry","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"white-maned_lynel","kind":"param","name":"entry_id","orig":"entry","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /entry/{entry}/image","json":"{\"operationId\":\"getEntryImage\",\"parameters\":[{\"description\":\"The name or ID of the compendium entry\",\"example\":\"white-maned_lynel\",\"in\":\"path\",\"name\":\"entry\",\"required\":true,\"schema\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Image file\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Image not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/entry/{entry}/image","rename":{"param":{"entry":"entry_id"}},"segments":[{"lit":"entry"},{"var":"entry_id"},{"lit":"image"}],"select":{"exist":["entry_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"white-maned_lynel","kind":"param","name":"id","orig":"entry","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /entry/{entry}","json":"{\"operationId\":\"getEntry\",\"parameters\":[{\"description\":\"The name or ID of the compendium entry (use underscores for spaces, e.g., 'white-maned_lynel' or ID number)\",\"example\":\"white-maned_lynel\",\"in\":\"path\",\"name\":\"entry\",\"required\":true,\"schema\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"category\":\"monsters\",\"common_locations\":[\"Hyrule Field\",\"Hebra Mountains\"],\"description\":\"These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.\",\"drops\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"id\":123,\"image\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"name\":\"white-maned lynel\"}},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with entry data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Entry not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/entry/{entry}","rename":{"param":{"entry":"id"}},"segments":[{"lit":"entry"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /all","json":"{\"operationId\":\"getAllEntries\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"creatures\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"},\"equipment\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"},\"materials\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"},\"monsters\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"},\"treasure\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category of the entry\",\"enum\":[\"creatures\",\"equipment\",\"materials\",\"monsters\",\"treasure\"],\"example\":\"monsters\",\"type\":\"string\"},\"common_locations\":{\"description\":\"Common locations where this entry can be found\",\"example\":[\"Hyrule Field\",\"Hebra Mountains\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cooking_effect\":{\"description\":\"Cooking effect for food/material entries\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the entry\",\"example\":\"These fearsome monsters have lived in Hyrule since ancient times.\",\"type\":\"string\"},\"dlc\":{\"description\":\"Whether this entry is part of DLC content\",\"type\":\"boolean\"},\"drops\":{\"description\":\"Items that can be dropped by this entry\",\"example\":[\"lynel horn\",\"lynel hoof\",\"lynel guts\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"edible\":{\"description\":\"Whether this item is edible\",\"type\":\"boolean\"},\"hearts_recovered\":{\"description\":\"Hearts recovered when consuming this item\",\"type\":\"number\"},\"id\":{\"description\":\"Unique identifier for the entry\",\"example\":123,\"type\":\"integer\"},\"image\":{\"description\":\"URL to the entry's image\",\"example\":\"https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel/image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the entry\",\"example\":\"white-maned lynel\",\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"category\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with all entries\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/all","segments":[{"lit":"all"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["entry"]]},"key$":"compendium_entry","name__orig":"compendium_entry","Name":"CompendiumEntry","name_":"compendium_entry","name-":"compendium-entry","NAME":"COMPENDIUM_ENTRY","index$":1}, {"active":true,"entity":"compendium_entry","key$":"BasicCompendiumEntryFlow","kind":"basic","name":"BasicCompendiumEntryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"compendium_entry_ref01","srcdatavar":"compendium_entry_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-compendium_entry_ref01"}}],"index$":0}]}, 'CompendiumEntry')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let compendium_entry_ref01_data = Object.values(setup.data.existing.compendium_entry)[0] as any

    // LOAD
    const compendium_entry_ref01_ent = client.CompendiumEntry()
    const compendium_entry_ref01_match_dt0: any = {}
    compendium_entry_ref01_match_dt0.id = compendium_entry_ref01_data.id
    const compendium_entry_ref01_data_dt0 = (await compendium_entry_ref01_ent.load(compendium_entry_ref01_match_dt0)).data()
    assert(compendium_entry_ref01_data_dt0.id === compendium_entry_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/compendium_entry/CompendiumEntryTestData.json')

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
    ['compendium_entry01','compendium_entry02','compendium_entry03','entry01','entry02','entry03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID': idmap,
    'HYRULE_COMPENDIUM_TEST_LIVE': 'FALSE',
    'HYRULE_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID']

  const live = 'TRUE' === env.HYRULE_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HYRULE_COMPENDIUM_TEST_COMPENDIUM_ENTRY_ENTID']
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
  
