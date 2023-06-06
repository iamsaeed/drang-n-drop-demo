<?php

namespace App\Tasks\Auth;

use Illuminate\Support\Facades\DB;

class LogoutTasks
{
    protected mixed $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function unsetToken()
    {
        $this->user->tokens()->delete();
    }
}
