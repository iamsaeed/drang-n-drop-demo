<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, RefreshDatabase;

    protected array $headers;
    protected mixed $auth;
    protected string $token;
    protected mixed $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->withoutExceptionHandling();

        $this->refreshApplication();

        Artisan::call('migrate:fresh --seed');

        $this->headers = [
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ',
        ];
    }

    public function login()
    {
        $this->user = User::first();

        $response = $this->postJson(route('api.login'), [
            'email' => $this->user->email,
            'password' => 'password',
            'device_name' => 'web'
        ]);

        $this->assertNotNull($response->json('token'));

        $this->headers['Authorization'] = 'Bearer '.$response->json('token');
        $this->token = $response->json('token');
        $this->auth = $response->json('user');

        $this->assertEquals($this->user->name,$response->json('user.name'));

        $this->assertEquals($this->user->email,$response->json('user.email'));
    }
}
