<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;

use Illuminate\Http\Request;

class TilesController extends Controller
{
    //

    public function tiles(Request $request)
    {
        return Inertia::render('Tiles');
    }
}
