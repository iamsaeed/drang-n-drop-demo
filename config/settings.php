<?php

return [

    'pagination' => 10,

    'workspace_db_path' => 'database/migrations/tenants',

    'user' => [
        'timezone' => 'UTC',
    ],

    'system' => [
        'auto_logout' => env('AUTO_LOGOUT', 3600),
    ]

];
