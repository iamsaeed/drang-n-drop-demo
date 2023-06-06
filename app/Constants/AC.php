<?php


namespace App\Constants;

class AC
{
    // application constants, can never change, ever!

    // app
    const _ACTIVE = 'active';
    const _INACTIVE = 'inactive';
    const _SUCCESS_CODE = 200;

    const _SUPER_ADMIN = 'super_admin'; // generally uses in context of roles
    const _ADMIN = 'admin'; // generally uses in context of roles
    const _USER = 'user'; // generally uses in context of roles

    const _TYPES = [
        'all', 'blog', 'service', 'product', 'slider', 'gallery'
    ];

}
