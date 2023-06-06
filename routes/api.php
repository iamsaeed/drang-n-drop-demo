<?php

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('api.login');
Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register'])->name('api.register');

Route::middleware('auth:sanctum')->group(function ()
{
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('api.logout');
    Route::get('/getAllLocations', [\App\Http\Controllers\LocationController::class, 'getAllLocations'])->name('api.getAllLocations');
});
