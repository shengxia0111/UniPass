<?php 
// 用于按学校搜索，根据学校种类返回全部学校值
header('Content-type:text/json');
$params = getQueryParams($_SERVER['QUERY_STRING']);
$SchoolType=$params["SchoolType"];
$_mysqli = new mysqli();
$_mysqli->connect('localhost','php','1234','wxxcx');
if(mysqli_connect_errno()){
	$_result=array("Error"=>'Error_ConnectionFailed');
	echo json_encode($_result);
	$_mysqli->close();
}else{
	$_mysqli->set_charset('utf8');
	$_sql="SELECT * FROM schoolinfo WHERE SchoolType=".$SchoolType;
	$_result=$_mysqli->query($_sql);
	if($_result===FALSE){
		$_result=array("Error"=>'Error_OpenIDCouldNotBeFound');
		echo json_encode($_result);
	}else{
		$i=0;
		while(($row =$_result->fetch_assoc()))
		{
			$value=$row;
			$key="Array[".$i."]";
			$arr[$i]=array($key=>$value);
			$i=$i+1;
		}
		echo json_encode($arr);
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