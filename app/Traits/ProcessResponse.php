<?php

namespace App\Traits;

use App\Constants\AC;
use Illuminate\Support\Facades\Config;

trait ProcessResponse
{
    public function processResponse($response, $code = AC::_SUCCESS_CODE): \Illuminate\Http\JsonResponse
    {
        // push common data to response array
        $response['status'] = $code;

        return response()->json($response,$code);
    }

    public function getDataFromJsonResponse($haystack, $needle)
    {
        return json_decode($haystack->getContent(), true)[$needle];
    }
}
