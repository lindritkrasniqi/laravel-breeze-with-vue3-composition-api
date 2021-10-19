<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ProfileRequest $request)
    {
        auth()->user()->update($request->validated());

        return response()->redirectToRoute('dashboard');
    }
}
