<?php

use App\Constants\AC;

return [
    'role_structure' => [
        AC::_SUPER_ADMIN => [
            'users' => 'b,c,r,u,d,re,f',
            'roles' => 'b,c,r,u,d,re,f',
            'permissions' => 'b,c,r,u,d,re,f',
            'categories' => 'b,c,r,u,d,re,f',
            'tags' => 'b,c,r,u,d,re,f',
            'profile' => 'b,c,r,u,re,f',

        ],
        AC::_ADMIN => [
            'users' => 'b,c,r,u,d,re,f',
            'profile' => 'b,c,r,u,re,f',
        ],
        AC::_USER => [
            'profile' => 'c,r,u',
        ]
    ],
    'permissions_map' => [
        'b' => 'browse',
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete',
        're' => 'restore',
        'f' => 'force_delete'
    ]
];
