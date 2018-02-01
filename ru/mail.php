<?php 

header('Access-Control-Allow-Origin: *');


$email = strip_tags($_POST['email']);

if(!(preg_match("/[0-9a-z]+@[0-9a-z]/", $email))){
    $status = 'error';
    $text = 'Введи корректный E-mail';
}else {
    $status = 'success';
    $text = 'Вы успешно подписались на наши обновления';
}


$response = json_encode(array('status'=>$status, 'text'=> $text));
echo $response;
