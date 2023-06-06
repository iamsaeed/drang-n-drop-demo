<?php

namespace App\Traits;

use App\Constants\AC;
use App\Models\Activity;
use App\Models\Comment;
use App\Models\Image;
use App\Models\Tag;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Config;

trait Common
{
    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->setTimezone(Config::get('settings.user.timezone'))->toDayDateTimeString();
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::parse($date)->setTimezone(Config::get('settings.user.timezone'))->toDayDateTimeString();
    }

    public function created_by(){
        return $this->belongsTo(User::class, 'created_id', 'id')->select(['id', 'name']);
    }

    public function updated_by(){
        return $this->belongsTo(User::class, 'updated_id', 'id')->select(['id', 'name']);
    }

    public function scopeActive($query)
    {
        return $query->status === AC::_ACTIVE;
    }

    public function scopeInactive()
    {
        return $this->status === AC::_INACTIVE;
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->with('created_by');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
