<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use App\Http\Resources\RoleResource;

class TestController extends Controller
{
    public function index()
    {
        // dd(RoleResource::collection(Role::all()));
        return Inertia::render('Test', [
            'roles' => RoleResource::collection(Role::all()),
            'test' => 'test',
        ]);
    }
}
