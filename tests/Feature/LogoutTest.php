<?php

namespace Tests\Feature;

use App\Models\User;
use App\Tasks\Auth\LogoutTasks;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LogoutTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_logout()
    {
        $this->login();

        $logout_task = new LogoutTasks($this->user);

        $logout_task->unsetToken();


    }
}
