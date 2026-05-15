package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCategoryEntityFunc func(client *HyruleCompendiumSDK, entopts map[string]any) HyruleCompendiumEntity

var NewCompendiumEntryEntityFunc func(client *HyruleCompendiumSDK, entopts map[string]any) HyruleCompendiumEntity

var NewMasterModeEntityFunc func(client *HyruleCompendiumSDK, entopts map[string]any) HyruleCompendiumEntity

var NewRegionEntityFunc func(client *HyruleCompendiumSDK, entopts map[string]any) HyruleCompendiumEntity

