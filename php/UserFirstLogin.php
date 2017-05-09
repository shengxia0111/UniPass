<?php
//第一次登陆时触发，用于初始化用户数据，将OpenID、Avatar位置和用户类型记录下来 
header('Content-type:text/json');
$OpenID=$_POST["OpenID"];
$Avatar=$_POST["Avatar"];
$UserType=$_POST["UserType"];
$_mysqli = new mysqli();
$_mysqli->connect('localhost','php','1234','wxxcx');
if(mysqli_connect_errno()){
	$_result=array("LOG"=>'Error_ConnectionFailed');
	echo json_encode($_result);
	$_mysqli->close();
}else{
	$_mysqli->set_charset('utf8');
	$_sql="INSERT INTO userinfo (OpenID,Avatar,UserType) VALUES (\"".$OpenID."\",\"".$Avatar."\",".$UserType.")";
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