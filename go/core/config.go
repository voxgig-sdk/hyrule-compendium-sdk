package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HyruleCompendium",
			"slug": "hyrule-compendium",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://botw-compendium.herokuapp.com/api/v3",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"category": map[string]any{},
				"compendium_entry": map[string]any{},
				"master_mode": map[string]any{},
				"region": map[string]any{},
			},
		},
		"entity": map[string]any{
			"category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "category",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "monsters",
											"kind": "param",
											"name": "id",
											"orig": "category",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/category/{category}",
								"rename": map[string]any{
									"param": map[string]any{
										"category": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "category",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"category",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"compendium_entry": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "Category of the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "common_locations",
						"short": "Common locations where this entry can be found",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cooking_effect",
						"short": "Cooking effect for food/material entries",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creatures",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dlc",
						"short": "Whether this entry is part of DLC content",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "drops",
						"short": "Items that can be dropped by this entry",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "edible",
						"short": "Whether this item is edible",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "equipment",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hearts_recovered",
						"short": "Hearts recovered when consuming this item",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "image",
						"short": "URL to the entry's image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "materials",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "monsters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "treasure",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "compendium_entry",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "white-maned_lynel",
											"kind": "param",
											"name": "entry_id",
											"orig": "entry",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/entry/{entry}/image",
								"rename": map[string]any{
									"param": map[string]any{
										"entry": "entry_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "entry",
									},
									map[string]any{
										"var": "entry_id",
									},
									map[string]any{
										"lit": "image",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"entry_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"entry",
									"{entry_id}",
									"image",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "white-maned_lynel",
											"kind": "param",
											"name": "id",
											"orig": "entry",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/entry/{entry}",
								"rename": map[string]any{
									"param": map[string]any{
										"entry": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "entry",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"entry",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/all",
								"segments": []any{
									map[string]any{
										"lit": "all",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"all",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entry",
						},
					},
				},
			},
			"master_mode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"req": true,
						"short": "Category of the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "common_locations",
						"short": "Common locations where this entry can be found",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cooking_effect",
						"short": "Cooking effect for food/material entries",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dlc",
						"short": "Whether this entry is part of DLC content",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "drops",
						"short": "Items that can be dropped by this entry",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "edible",
						"short": "Whether this item is edible",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hearts_recovered",
						"short": "Hearts recovered when consuming this item",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "image",
						"short": "URL to the entry's image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Name of the entry",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "master_mode",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "entry",
											"orig": "entry",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/master_mode/entry/{entry}",
								"segments": []any{
									map[string]any{
										"lit": "master_mode",
									},
									map[string]any{
										"lit": "entry",
									},
									map[string]any{
										"var": "entry",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"entry",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"master_mode",
									"entry",
									"{entry}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"entry",
						},
					},
				},
			},
			"region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Description of the region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the region",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"regions",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "hyrule_field",
											"kind": "param",
											"name": "id",
											"orig": "region",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/region/{region}",
								"rename": map[string]any{
									"param": map[string]any{
										"region": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "region",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"region",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
