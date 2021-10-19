<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_firstname',
        'owner_lastname',
        'owner_email',
        'name',
        'country',
        'street_address',
        'city',
        'state',
        'postal_code',
    ];
}
