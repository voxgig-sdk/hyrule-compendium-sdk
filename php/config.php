<?php
declare(strict_types=1);

// HyruleCompendium SDK configuration

class HyruleCompendiumConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
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
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'category',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'monsters',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'compendium_entry' => [
          'fields' => [
            [
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'common_locations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'cooking_effect',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'creatures',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dlc',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'drops',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'edible',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'equipment',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'hearts_recovered',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'materials',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'monsters',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'treasure',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'compendium_entry',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'white-maned_lynel',
                        'kind' => 'param',
                        'name' => 'entry_id',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'white-maned_lynel',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                ],
                [
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
                ],
              ],
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
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'common_locations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'cooking_effect',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dlc',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'drops',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'edible',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'hearts_recovered',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'master_mode',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'entry',
                        'orig' => 'entry',
                        'reqd' => true,
                        'type' => '`$ANY`',
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
                ],
              ],
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
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'region',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
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
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'hyrule_field',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'region',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                ],
              ],
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
