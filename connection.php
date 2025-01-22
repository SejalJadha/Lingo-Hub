<?php
   //$connectiion=mysqli_connect("localhost","root","password","miniproject");
   $conn=new mysqli("localhost","root","PHW#84#jeor","miniproject");

   if(!conn){
    die("Something Went Wrong...?");
   }
   else{
    die("Connection Succesful");
   }
?>