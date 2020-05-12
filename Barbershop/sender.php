<?php
   if(isset($_POST['submit'])){
    require 'D:/OSPanel/domains/localhost/mail/phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer();
    $first_name = $_POST['name'];
    $last_name = $_POST['surname'];
    $name_buy = $_POST['name-item'];
    $email_address = $_POST['email-send'];
    $message ="Дорогий " . $first_name . "  " . $last_name . " Ви придбали " . $name_buy . "\n\n" . $_POST['message'];
    $mail->Host="smtp.gmail.com";
    $mail->isSMTP();
    $mail->SMTPAuth=true;

    $mail->Username="sendermail";
    $mail->Password="senderpassword";

    $mail->SMTPSecure="ssl";

    $mail->Port=465;

    $mail->Subject="some body";

    $mail->Body = $message;

    $mail->setFrom('sendermail','Orest');
    $mail->addAddress($email_address);
    $mail->addReplyTo("sendermail");

    if($mail->send()){
        echo "Mail send";
    }
    else{
        echo "wrong";
    }
}
?>