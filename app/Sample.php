<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{
    //
    protected $appends = ['profile_image'];
    public function getProfileImageAttribute(){
        return asset('images/').'/'.$this->image;
    }
}
