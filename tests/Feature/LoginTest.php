<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_login()
    {
        $user = User::first();

        $response = $this->postJson(route('api.login'), [
            'email' => $user->email,
            'password' => 'password',
            'device_name' => 'web'
        ]);

        $this->assertNotNull($response->json('token'));

        $this->assertEquals($user->name,$response->json('user.name'));

        $this->assertEquals($user->email,$response->json('user.email'));
    }
}
