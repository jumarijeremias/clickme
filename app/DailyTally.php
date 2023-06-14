<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class DailyTally extends Model
{
    protected $guarded = [];

    public static function getCurrentDayTally() {
        $tally = self::whereDate('tally_date', Carbon::now())->first();

        if (!$tally) {
            $tally = self::create([
                'count' => 0,
                'tally_date' => Carbon::now()
            ]);
        }

        return $tally;
    }
}
