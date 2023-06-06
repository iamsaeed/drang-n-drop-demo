<?php

namespace App\Models;

class Location extends App
{
    protected $fillable = ['name', 'parent_id', 'status', 'created_id', 'updated_id'];

    public function parent()
    {
        return $this->belongsTo(Location::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Location::class, 'parent_id');
    }
}
