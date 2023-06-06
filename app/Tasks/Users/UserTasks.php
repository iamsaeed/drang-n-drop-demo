<?php

namespace App\Tasks\Users;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserTasks
{
    public static function addOrUpdateUser(Array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role_id' => $data['role_id'] ?? !User::count() ? 1 : 3
        ]);

        return $user;
    }

    public static function addOrUpdatePassword($password, User $user)
    {
        $user->password = bcrypt($password);
        $user->save();

        Log::info('User: '.$user->name.' password has been updated');
    }
}
