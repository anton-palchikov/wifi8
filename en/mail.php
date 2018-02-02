<?php 

header('Access-Control-Allow-Origin: *');

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: worldwifi <info@worldwifi.io>\r\n"; // от кого


$email = strip_tags($_POST['email']);

$subject = 'Subscribe';



if(!(preg_match("/[0-9a-z]+@[0-9a-z]/", $email))){
    $status = 'error';
    $text = 'Enter a valid E-mail';
}else {

	$mail = mail('info@worldwifi.io', $subject, $email, $headers);
    if ($mail) {
    	$status = 'success';
    	$text = 'You have successfully subscribed to our updates';
    }else {
    	$status = 'error';
    	$text = 'Try again';
    }
}


$response = json_encode(array('status'=>$status, 'text'=> $text));
echo $response;
