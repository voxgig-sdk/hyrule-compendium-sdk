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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
								"parts": []any{
									"category",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category": "id",
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
								"parts": []any{
									"entry",
									"{entry_id}",
									"image",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry": "entry_id",
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
								"parts": []any{
									"entry",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entry": "id",
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/all",
								"parts": []any{
									"all",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
								"parts": []any{
									"master_mode",
									"entry",
									"{entry}",
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
						"name": "name",
						"short": "Name of the region",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"regions",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
								"parts": []any{
									"region",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"region": "id",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
