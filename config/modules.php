<?php

use App\Constants\AC;

return [
    'module_structure' => [
        AC::_SUPER_ADMIN => [
            'users' => 'y',
            'roles' => 'y',
            'permissions' => 'y',
            'categories' => 'y',
            'tags' => 'y',
            'profile' => 'y',

        ],
        AC::_ADMIN => [
            'users' => 'y',
            'roles' => 'y',
            'permissions' => 'y',
            'categories' => 'y',
            'tags' => 'y',
            'profile' => 'y',
        ],
        AC::_USER => [
            'profile' => 'c,r,u',
        ]
    ],
    'access_control_map' => [
        'y' => 'yes',
        'n' => 'no',
    ]
];
