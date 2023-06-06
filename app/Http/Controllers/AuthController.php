<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Tasks\Auth\LoginTasks;
use App\Tasks\Auth\LogoutTasks;
use App\Tasks\Permissions\PermissionsInitTasks;
use App\Tasks\Users\UserTasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{
    public function login(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->input('email'))->first();

        LoginTasks::checkIfUserHasAccount($user);

        LoginTasks::checkIfUserAccountIsNotSuspended($user);

        LoginTasks::authenticateUser($request->input('password'), $user->password);

        $token = LoginTasks::generateAuthToken($user,$request->input('device_name'));

        return $this->processResponse([
            'user' => $user->only('id', 'name', 'email', 'phone'),
            'token' => $token,
            'message' => __('response_messages.login_success')
        ]);
    }

    public function register(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = UserTasks::addOrUpdateUser($request->input());

        LoginTasks::authenticateUser($request->input('password'), $user->password);

        $token = LoginTasks::generateAuthToken($user,$request->input('device_name'));

        return $this->processResponse([
            'user' => $user->only('id', 'name', 'email', 'phone'),
            'token' => $token,
            'message' => __('response_messages.login_success')
        ]);
    }

    public function logout(Request $request)
    {
        $logout_task = new LogoutTasks($request->user());

        $logout_task->unsetToken();

        return $this->processResponse([
            'message' => __('response_message.logout_success')
        ]);
    }
}
