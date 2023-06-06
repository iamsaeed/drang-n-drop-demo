<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLocationRequest;
use App\Http\Requests\UpdateLocationRequest;
use App\Models\Location;

class LocationController extends Controller
{
    public function getAllLocations()
    {
        $locations = Location::whereNull('parent_id')->get();

        $allCities = Location::whereNotNull('parent_id')->get();

        return $this->processResponse([
            'countries' => $locations,
            'cities' => $allCities
        ]);
    }
}
