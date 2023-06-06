<?php

namespace App\Tasks\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class  LoginTasks
{
    public static function checkIfUserHasAccount($user)
    {
        if(!$user) {
            throw ValidationException::withMessages([
                'email' => [__('response_messages.account_does_not_exists')],
            ]);
        }
    }

    public static function checkIfUserAccountIsNotSuspended($user)
    {
        if($user->status === 'inactive') {
            throw ValidationException::withMessages([
                'email' => [__('response_messages.account_suspended')],
            ]);
        }
    }

    public static function authenticateUser($password, $user_password)
    {
        if (!Hash::check($password, $user_password)) {
            throw ValidationException::withMessages([
                'email' => [__('response_messages.login_credentials_incorrect')],
            ]);
        }
    }

    public static function generateAuthToken($user, $device_name)
    {
        return $user->createToken($device_name, ['*'], now()->addDay())->plainTextToken;
    }
}
