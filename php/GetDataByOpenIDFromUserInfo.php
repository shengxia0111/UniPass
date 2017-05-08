<?php
$params = getQueryParams($_SERVER['QUERY_STRING']);
$OpenID=$params["OpenID"];
$_mysqli = new mysqli();
@$mysqli->connect('localhost','php','1234','wxxcx');
if(mysqli_connect_errno()){
	echo 'header('Content-type:text/json')';
	$_result=array("Error"=>'Error_ConnectionFailed');
	echo json_encode($_result);
	$_mysqli->close();
}else{
	$_mysqli->set_charset('utf8');
	$_sql="SELECT * FROM userinfo where OpenID=".$OpenID;
	try{
		$_result=$_mysqli->query($_sql);
	}catch(Exception $e){
		echo 'header('Content-type:text/json')';
		$_result=array("Error"=>'OpenIDCouldNotBeFound');
		echo json_encode($_result);
		$_mysqli->close();
		exit();
	}
	echo json_encode(($_result->fetch_assoc()));
	$_mysqli->close();
	
}

?>