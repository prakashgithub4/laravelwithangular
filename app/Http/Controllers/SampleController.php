<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Libraries\Response;
use App\Sample;
use Validator;

class SampleController extends Controller
{
    //
    public function add(Request $request){
    // $res = new Response();
    $validation = Validator::make($request->all(),[
            
        'name' => ['required', 'string'],
        'age' => ['required'],
        //'image' => 'image|mimes:jpeg,png,jpg|max:2048'

     ]);

 if ($validation->fails()) {
        // return response()->json(['error'=>$validation->errors()],400);
         return Response::response(['message'=>"",'error'=>$validation->errors(),"data"=>[]]);
     }
     $imageName = time().'.'.$request->image->extension();  
     $request->image->move(public_path('images'), $imageName);
     $sample = new Sample();
     $sample->name = $request->name;
     $sample->age = $request->age;
     $sample->image = $imageName;
     $sample->save();
     return Response::response(['success'=>1,'message'=>"Added Successfully",'error'=>'',"data"=>$sample]);
    }
    public function index(){
        $sample = Sample::all();
        return Response::response(['success'=>1,'message'=>"sample list fetch successfully",'error'=>"","data"=>$sample]);
    }
   
}
