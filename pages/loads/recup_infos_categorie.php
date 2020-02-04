<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: *");	
	include("includes/connect.php");
	$slug = $_POST['slug']; 
	$slug = str_replace("/", "", $slug); 
	// $guid = $_POST['guid']; 
	// echo 'GUID : '.$guid; 
	
	// print_r( $_POST ); 
	$array = new stdClass; 
	$req = $bdd->query("SELECT term_taxonomy_id, B.term_id FROM wp9p_term_taxonomy AS A, wp9p_terms AS B  WHERE B.slug = '" . $slug . "' AND A.term_id = B.term_id limit 0,1");
	$data = $req->fetch();
	$term_taxonomy_id = $data['term_taxonomy_id'];
	$req2 = $bdd->query("SELECT post.ID as numero,  post.guid AS lien, post.post_date  ,  D.guid as image, C.meta_value, post.post_title ,   post.post_content  ,  post.guid  FROM  `wp9p_posts` as post JOIN  wp9p_term_relationships rs ON rs.object_id = post.ID JOIN wp9p_postmeta AS C  ON  C.post_id = post.ID  JOIN wp9p_posts AS D on C.meta_value = D.ID WHERE  post.post_type =  'product'  AND rs.term_taxonomy_id  = '" . $term_taxonomy_id . "'   ORDER BY post.post_date DESC LIMIT 10");
	
	$data2 = $req2->fetch(); 
	$liste_produits = array();
	// echo $term_taxonomy_id.'<br/>';
	while($produits =$req2->fetch())
	{
		$array = array();
		$array['nom'] = $produits['post_title'];
		$array['image'] = $produits['image']; 
		$array['lien'] = str_replace('https://studiofrancine.be/product/', 'http://localhost:3000/produits/', $produits['lien']); 
		$liste_produits[] = $array;
	}
	
	 // if(!empty($data2))
	// { 
		// $array->id=$data['ID'];
		// $array->post_title  = $data['post_title'];
		// $array->post_content= utf8_encode($data['post_content']);
		// $array->slug  = $slug; 
		// $array->image  = $thumbnail_link['guid'];
		// echo $data['ID']; 
	// }
	// else
	// {
		// $array['id']='1521';
		// $array['slug'] = $slug;
	// }  
 	echo json_encode($liste_produits); 
?>  