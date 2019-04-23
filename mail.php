<!-- <?php
    $to = '854832347@qq.com';
    $firstname = $_POST["fname"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $phone= $_POST["phone"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$firstname.'  '.$laststname.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>phone: '.$phone.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>
        
    </table>';

    $retval =  mail ($to, $email,$message,$headers);

    // if (@mail($to, $email, $message, $headers))
    // {
    //     echo 'The message has been sent.';
    // }else{
    //     echo 'failed';
    // }

    if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }

?>
 -->


 <?php
    $to = 'elenaxu517@gmail.com';
    
    $subject= $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    // $text= $_POST["message"];
    // $phone= $_POST["phone"];
    


    // $headers = 'MIME-Version: 1.0' . "\r\n";
    // $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    // $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // $message ="THis is the message";

    $header = "From: " . $email . "\r\n"; // Sender's E-mail
         // $header .= "Cc:afgh@somedomain.com \r\n";
          $header .= "MIME-Version: 1.0\r\n";
          $header .= "Content-type: text/html\r\n";

    $retval =  mail ($to, $subject,$message,$header);

    // if (@mail($to, $email, $message, $headers))
    // {
    //     echo 'The message has been sent.';
    // }else{
    //     echo 'failed';
    // }

    if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }

?>
