<?php

namespace Tests\Feature\Users;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ListUserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_users_list()
    {
        $this->login();

        $response = $this->getJson(route('api.users.index'), $this->headers);

        $this->assertCount(11, $response->json('users'));
    }
}
