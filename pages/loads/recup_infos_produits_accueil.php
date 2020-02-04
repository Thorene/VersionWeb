<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: *");	
   include ("includes/connect.php");
   $req = $bdd->query("SELECT * FROM extracteur_site_produits LIMIT 0,1");
   $data = $req->fetch(); 
   $nouvel_array = array();
   for($i=1;$i<=44 ;$i++)
   {
	   $nom = 'po_'.$i;
	   $entree =  json_decode(stripslashes(stripslashes($data[$nom])));
	   // echo stripslashes($entree).'<br/>';
	   $array[$nom]=$entree;
 	   $nouvel_objet = array();
 	   $nouvel_objet['permalink']=$entree->permalink;
 	   $nouvel_objet['image']=$entree->image;
 	   $nouvel_objet['nom']=$entree->nom;
	   $nouvel_objet = json_encode($nouvel_objet);
	   $nouvel_array[] = $nouvel_objet;
   }
	echo json_encode($nouvel_array);
?>