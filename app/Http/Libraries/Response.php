<?php 
namespace App\Http\Libraries;

class Response {
    public static function response($response,$isArray = false){
        if(array_key_exists('success',$response)){
            return response()->json(['status'=>true,'message'=>$response['message'],'data'=>($isArray)?$response['data']:(object)$response['data'],'error'=>'']);
        }else{
            return response()->json(['status'=>false,'message'=>$response['message'],'data'=>$response['data'],'error'=>$response['error']]);
        }
       
    }
}