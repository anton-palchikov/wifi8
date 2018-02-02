<?php 

header('Access-Control-Allow-Origin: *');

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: worldwifi <info@worldwifi.io>\r\n"; // от кого


$email = strip_tags($_POST['email']);

$subject = 'Подписка';



if(!(preg_match("/[0-9a-z]+@[0-9a-z]/", $email))){
    $status = 'error';
    $text = 'Введи корректный E-mail';
}else {

	$mail = mail('info@worldwifi.io', $subject, $email, $headers);
    if ($mail) {
    	$status = 'success';
    	$text = 'Вы успешно подписались на наши обновления';
    }else {
    	$status = 'error';
    	$text = 'Повторите попытку';
    }
}


$response = json_encode(array('status'=>$status, 'text'=> $text));
echo $response;
