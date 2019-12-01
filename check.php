<?php

$first="firstname";
$last="lastname";
$lastcheck="date_ofmedicalcheck";
$age="age";

$t=array();
$t["erreur"]="formular not valid";
if($_POST["firstname"]!=$first){
	$t["erreurfirst"]="please enter a firstname";
}

if($_POST["lastname"]!=$last){
	$t["erreurlasname"]="please enter a lastname";
}

if($_POST["date_ofmedicalcheck"]!=$lastcheck){
	$t["erreurlastcheck"]="please enter a last medical check";
}

if($_POST["age"]!=$age){
	$t["erreurage"]="please enter a age";	
	
}

else{
	$t["erreur"]="no";
	$t["retour"]="<P> success! yoou add a useranimal";
}

echo json_encode($tab);
?>