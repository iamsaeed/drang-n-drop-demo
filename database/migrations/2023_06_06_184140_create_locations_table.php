<?php

use App\Constants\AC;
use App\Models\Location;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedInteger('parent_id')->nullable()->default(null);
            $table->enum('status', [AC::_ACTIVE, AC::_INACTIVE])->default(AC::_ACTIVE);
            $table->unsignedInteger('created_id')->nullable()->default(null);
            $table->unsignedInteger('updated_id')->nullable()->default(null);
            $table->softDeletes();
            $table->timestamps();
        });

        $this->seed();
    }

    public function seed()
    {
        $data = [
            'india' => ['new delhi', 'mumbai', 'chennai', 'kolkata', 'lucknow', 'noida', 'gurugram'],
            'uae' => ['abu dhabi', 'dubai', 'sharjah', 'ajman', 'umm al quwain', 'fujairah', 'ras al khaimah'],
            'usa' => ['washington', 'new York', 'los angeles', 'california'],
            'china' => ['bejing', 'schenzen']
        ];

        foreach ($data as $country => $cities) {
            $countryLocation = Location::create([
                'name' => $country,
                'parent_id' => null,
                'status' => AC::_ACTIVE,
            ]);

            foreach ($cities as $city) {
                Location::create([
                    'name' => $city,
                    'parent_id' => $countryLocation->id,
                    'status' => AC::_ACTIVE,
                ]);
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locations');
    }
};
