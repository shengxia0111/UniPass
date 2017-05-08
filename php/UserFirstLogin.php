<?php 
header('Content-type:text/json');
$OpenID=$_POST["OpenID"];
$Avatar=$_POST["Avatar"];
$_mysqli = new mysqli();
$_mysqli->connect('localhost','php','1234','wxxcx');
if(mysqli_connect_errno()){
	$_result=array("LOG"=>'Error_ConnectionFailed');
	echo json_encode($_result);
	$_mysqli->close();
}else{
	$_mysqli->set_charset('utf8');
	$_sql="INSERT INTO userinfo (OpenID,Avatar) VALUES (\"".$OpenID."\",\"".$Avatar."\")";
	$_result=$_mysqli->query($_sql);
	if($_result===FALSE){
		$_result=array("LOG"=>'Error_InsertParaError');
		echo $_result["LOG"];
	}else{
		$_result=array("LOG"=>'Success');
		echo $_result["LOG"];;
	}
}


?>