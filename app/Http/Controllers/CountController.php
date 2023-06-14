<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DailyTally;

class CountController extends Controller
{
    public function getCount() {
        $tally = DailyTally::getCurrentDayTally();

        return $tally->count;
    }

    public function addCount() {
        $tally = DailyTally::getCurrentDayTally();

        $tally->increment("count");

        return $tally->count;
    }
}
