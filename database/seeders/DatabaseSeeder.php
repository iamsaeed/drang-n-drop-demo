<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\User::factory()->create([
            'name' => 'Ahmad',
            'email' => 'demo@tooeasy.in',
            'role_id' => 1,
            'password' => bcrypt('password'),
            'created_id' => 1,
            'updated_id' => 1,
        ]);

         \App\Models\User::factory(10)->create();
    }
}
