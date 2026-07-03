package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HyruleCompendium",
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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"active": true,
						"name": "data",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 0,
					},
				},
				"name": "category",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "monsters",
											"kind": "param",
											"name": "id",
											"orig": "category",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"compendium_entry": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "data",
						"op": map[string]any{
							"load": map[string]any{
								"req": false,
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "compendium_entry",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "white-maned_lynel",
											"kind": "param",
											"name": "entry_id",
											"orig": "entry",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "white-maned_lynel",
											"kind": "param",
											"name": "id",
											"orig": "entry",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"method": "GET",
								"orig": "/all",
								"parts": []any{
									"all",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 2,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
				},
				"name": "master_mode",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "entry",
											"orig": "entry",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
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
						"active": true,
						"name": "data",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"method": "GET",
								"orig": "/regions",
								"parts": []any{
									"regions",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "hyrule_field",
											"kind": "param",
											"name": "id",
											"orig": "region",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
