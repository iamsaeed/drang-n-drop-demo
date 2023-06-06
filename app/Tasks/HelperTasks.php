<?php

namespace App\Tasks;

use App\Constants\AC;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HelperTasks
{
    public static function statusChange($table, $id)
    {
        $model = Str::studly(Str::singular($table));

        $item = ("App\\Models\\".$model)::find($id);

        if ($item->status === AC::_ACTIVE)
        {
            $status = AC::_INACTIVE;
            $message = Str::studly($model).' '. __('response_messages.status_deactivated');
        } else {
            $status = AC::_ACTIVE;
            $message = Str::studly($model).' '. __('response_messages.status_activated');
        }

        ("App\\Models\\".$model)::where('id', $id)->update(['status' => $status]);

        return $message;
    }
}
