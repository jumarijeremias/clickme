<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Http\Controllers\CountController;

Route::get('/', function () {
    return view('home');
});

Route::get('/get-count', [CountController::class, 'getCount']);
Route::post('/add-count', [CountController::class, 'addCount']);
