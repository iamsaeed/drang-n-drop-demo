<?php

return [
    'app_settings' => [
        ['group' => 'app', 'display_name' => 'Company Name', 'key' => 'company_name', 'value' => 'Company Name', 'field_type' =>'text' ],
        ['group' => 'app', 'display_name' => 'Company Landline', 'key' => 'company_landline', 'value' => '7081708171', 'field_type' =>'number' ],
        ['group' => 'app', 'display_name' => 'Company Mobile', 'key' => 'company_mobile', 'value' => '7081708171', 'field_type' =>'number' ],
        ['group' => 'app', 'display_name' => 'Log Activity', 'key' => 'log_activity', 'value' => 'Recording', 'field_type' =>'select' ],
    ],

    'settings' => [
        ['group' => 'preferences', 'display_name' => 'Date Format', 'key' => 'date_format', 'value' => 'DD-MM-YYYY', 'field_type' =>'select' ],
        ['group' => 'preferences', 'display_name' => 'Pagination', 'key' => 'pagination', 'value' => '20', 'field_type' =>'number' ],
        ['group' => 'preferences', 'display_name' => 'Time Zone', 'key' => 'time_zone', 'value' => 'Asia/Kolkata', 'field_type' =>'select' ],
        ['group' => 'preferences', 'display_name' => 'Search Filters', 'key' => 'search_filters', 'value' => 'Show', 'field_type' =>'select' ],
        ['group' => 'preferences', 'display_name' => 'Dark Mode', 'key' => 'dark_mode', 'value' => 'Yes', 'field_type' =>'select' ],
    ],

    'lists' => [
        ['key' => 'date_format', 'value' => 'DD-MM-YYYY'],
        ['key' => 'date_format', 'value' => 'MM-DD-YYYY'],
        ['key' => 'search_filters', 'value' => 'Show'],
        ['key' => 'search_filters', 'value' => 'Hide'],
        ['key' => 'dark_mode', 'value' => 'Yes'],
        ['key' => 'dark_mode', 'value' => 'No'],
        ['key' => 'log_activity', 'value' => 'Recording'],
        ['key' => 'log_activity', 'value' => 'Stopped'],
        ['key' => 'time_zone', 'value' => 'Asia/Kolkata'],
        ['key' => 'time_zone', 'value' => 'Asia/Muscat'],
        ['key' => 'time_zone', 'value' => 'Asia/Dubai'],
        ['key' => 'time_zone', 'value' => 'Asia/Kathmandu'],
        ['key' => 'time_zone', 'value' => 'Asia/Kuwait'],
        ['key' => 'time_zone', 'value' => 'Asia/Singapore'],
        ['key' => 'time_zone', 'value' => 'America/New_York'],
        ['key' => 'time_zone', 'value' => 'America/Los_Angeles'],
        ['key' => 'time_zone', 'value' => 'Europe/London'],
        ['key' => 'time_zone', 'value' => 'Asia/Kabul'],
        ['key' => 'time_zone', 'value' => 'Australia/Sydney'],
        ['key' => 'time_zone', 'value' => 'Australia/Melbourne'],
    ]
];
