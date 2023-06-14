<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\DailyTally;

class DailyTallySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DailyTally::firstOrCreate(
            ['tally_date' => Carbon::now()],
            [
                'count' => 0,
            ]
        );
    }
}
