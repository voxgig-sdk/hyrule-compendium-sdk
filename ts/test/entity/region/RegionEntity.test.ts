

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


describe('RegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HYRULE_COMPENDIUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('HYRULE_COMPENDIUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HyruleCompendiumSDK.test()
    const ent = testsdk.Region()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HYRULE_COMPENDIUM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Description of the region","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"short":"Name of the region","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"region","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /regions","json":"{\"operationId\":\"getAllRegions\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the region\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Hyrule Field\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with all regions\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/regions","segments":[{"lit":"regions"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"hyrule_field","kind":"param","name":"id","orig":"region","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /region/{region}","json":"{\"operationId\":\"getRegion\",\"parameters\":[{\"description\":\"The name of the region (use underscores for spaces)\",\"example\":\"hyrule_field\",\"in\":\"path\",\"name\":\"region\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"description\":{\"description\":\"Description of the region\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the region\",\"example\":\"Hyrule Field\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with region data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Region not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/region/{region}","rename":{"param":{"region":"id"}},"segments":[{"lit":"region"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"region","name__orig":"region","Name":"Region","name_":"region","name-":"region","NAME":"REGION","index$":3}, {"active":true,"entity":"region","key$":"BasicRegionFlow","kind":"basic","name":"BasicRegionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"region_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"region_ref01","srcdatavar":"region_ref01_data","suffix":"_dt0"},"match":{"id":"region01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-region_ref01"}}],"index$":1}]}, 'Region')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let region_ref01_data = Object.values(setup.data.existing.region)[0] as any

    // LIST
    const region_ref01_ent = client.Region()
    const region_ref01_match: any = {}

    const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e: any) => e.data())


    // LOAD
    const region_ref01_match_dt0: any = {}
    region_ref01_match_dt0.id = region_ref01_data.id
    const region_ref01_data_dt0 = (await region_ref01_ent.load(region_ref01_match_dt0)).data()
    assert(region_ref01_data_dt0.id === region_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/region/RegionTestData.json')

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
    ['region01','region02','region03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HYRULE_COMPENDIUM_TEST_REGION_ENTID': idmap,
    'HYRULE_COMPENDIUM_TEST_LIVE': 'FALSE',
    'HYRULE_COMPENDIUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HYRULE_COMPENDIUM_TEST_REGION_ENTID']

  const live = 'TRUE' === env.HYRULE_COMPENDIUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HYRULE_COMPENDIUM_TEST_REGION_ENTID']
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
  
