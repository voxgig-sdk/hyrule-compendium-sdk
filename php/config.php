<?php
declare(strict_types=1);

// HyruleCompendium SDK configuration

class HyruleCompendiumConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HyruleCompendium",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://botw-compendium.herokuapp.com/api/v3",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "category" => [],
                    "compendium_entry" => [],
                    "master_mode" => [],
                    "region" => [],
                ],
            ],
            "entity" => [
        'category' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
          ],
          'name' => 'category',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'monsters',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/category/{category}',
                  'parts' => [
                    'category',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'compendium_entry' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'common_locations',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'cooking_effect',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'creatures',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'dlc',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'drops',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'edible',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'equipment',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'hearts_recovered',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'image',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'materials',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'monsters',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'treasure',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 15,
            ],
          ],
          'name' => 'compendium_entry',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'white-maned_lynel',
                        'kind' => 'param',
                        'name' => 'entry_id',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/entry/{entry}/image',
                  'parts' => [
                    'entry',
                    '{entry_id}',
                    'image',
                  ],
                  'rename' => [
                    'param' => [
                      'entry' => 'entry_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'entry_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'white-maned_lynel',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/entry/{entry}',
                  'parts' => [
                    'entry',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entry' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/all',
                  'parts' => [
                    'all',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'entry',
              ],
            ],
          ],
        ],
        'master_mode' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'common_locations',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'cooking_effect',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'dlc',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'drops',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'edible',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'hearts_recovered',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'image',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
          ],
          'name' => 'master_mode',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'entry',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$ANY`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/master_mode/entry/{entry}',
                  'parts' => [
                    'master_mode',
                    'entry',
                    '{entry}',
                  ],
                  'select' => [
                    'exist' => [
                      'entry',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'entry',
              ],
            ],
          ],
        ],
        'region' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'region',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/regions',
                  'parts' => [
                    'regions',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'hyrule_field',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'region',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/region/{region}',
                  'parts' => [
                    'region',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'region' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HyruleCompendiumFeatures::make_feature($name);
    }
}
