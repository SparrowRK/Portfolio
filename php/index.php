<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                          //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                 //Enable SMTP authentication
    $mail->Username   = 'roskansrk@gmail.com';                                   //SMTP username
    $mail->Password   = 'hgvp eihh kjwx ftuf';                                   //SMTP password
    $mail->SMTPSecure = 'TLS';                                //Enable implicit TLS encryption
    $mail->Port       = 587;                                  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('roskansrk@gmail.com', 'Portfolio');
    $mail->addAddress('roskillrk@gmail.com', 'Portfolio');
    $mail->addAddress('roskansrk@gmail.com', 'Portfolio');      //Add a recipient
    $body = '<p>Name: '.$_POST['persone'].'</p>' . 
                '<p>Email: '.$_POST['email'].'</p>' . 
                '<p>User comment: '.$_POST['text'].'</p>';

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Message';
    $mail->Body    = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}