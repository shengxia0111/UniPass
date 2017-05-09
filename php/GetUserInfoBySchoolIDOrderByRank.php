<?php 
header('Content-type:text/json');
$params = getQueryParams($_SERVER['QUERY_STRING']);
$RankType=$params["Rank"];
$SchoolID=$params["SchoolID"];
switch ($RankType)
{
	case "1":
		$Rank="RankA";
	case "2":
		$Rank="RankB";
	case "3":
		$Rank="RankC";
	default:
		$Rank="RankA";
}
$Number=$params["Number"];
$_mysqli = new mysqli();
$_mysqli->connect('localhost','php','1234','wxxcx');
if(mysqli_connect_errno()){
	$_result=array("Error"=>'Error_ConnectionFailed');
	echo json_encode($_result);
	$_mysqli->close();
}else{
	$_mysqli->set_charset('utf8');
	$_sql="SELECT * FROM userinfo WHERE SchoolID=".$SchoolID." ORDER BY ".$Rank."LIMIT ".$Number;
	$_result=$_mysqli->query($_sql);
	if($_result===FALSE){
		$_result=array("Error"=>'Error_OpenIDCouldNotBeFound');
		echo json_encode($_result);
	}else{
		echo json_encode(($_result->fetch_assoc()));
		$_mysqli->close();
	}
}

function getQueryParams($query)
{
	$queryParts = explode('&', $query);
		$params = array();
			foreach ($queryParts as $param)
			{
				$item = explode('=', $param);
							        $params[$item[0]] = $item[1];
			}
				return $params;
}

?>