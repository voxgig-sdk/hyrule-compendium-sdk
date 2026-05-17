package voxgighyrulecompendiumsdk

import (
	"github.com/voxgig-sdk/hyrule-compendium-sdk/go/core"
	"github.com/voxgig-sdk/hyrule-compendium-sdk/go/entity"
	"github.com/voxgig-sdk/hyrule-compendium-sdk/go/feature"
	_ "github.com/voxgig-sdk/hyrule-compendium-sdk/go/utility"
)

// Type aliases preserve external API.
type HyruleCompendiumSDK = core.HyruleCompendiumSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HyruleCompendiumEntity = core.HyruleCompendiumEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HyruleCompendiumError = core.HyruleCompendiumError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCategoryEntityFunc = func(client *core.HyruleCompendiumSDK, entopts map[string]any) core.HyruleCompendiumEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewCompendiumEntryEntityFunc = func(client *core.HyruleCompendiumSDK, entopts map[string]any) core.HyruleCompendiumEntity {
		return entity.NewCompendiumEntryEntity(client, entopts)
	}
	core.NewMasterModeEntityFunc = func(client *core.HyruleCompendiumSDK, entopts map[string]any) core.HyruleCompendiumEntity {
		return entity.NewMasterModeEntity(client, entopts)
	}
	core.NewRegionEntityFunc = func(client *core.HyruleCompendiumSDK, entopts map[string]any) core.HyruleCompendiumEntity {
		return entity.NewRegionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHyruleCompendiumSDK = core.NewHyruleCompendiumSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
