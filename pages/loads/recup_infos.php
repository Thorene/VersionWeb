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
	$req = $bdd->query("SELECT * FROM wp9p_posts WHERE post_name LIKE '%" . $slug . "%' limit 0,1");
	 
	 $data = $req->fetch();
	 $id_wordpress = $data['ID'];
	 $req_meta = $bdd->query("SELECT * FROM wp9p_postmeta WHERE post_id =$id_wordpress and meta_key='_thumbnail_id'");
	$data_meta = $req_meta->fetch();
	$id_thumbnail = $data_meta['meta_value']; 
	$req_meta2 = $bdd->query("SELECT * FROM wp9p_postmeta WHERE post_id =$id_wordpress and meta_key ='_regular_price'");
	$data_meta2 = $req_meta2->fetch();
	$req_meta3 = $bdd->query("SELECT * FROM wp9p_postmeta WHERE post_id =$id_wordpress and meta_key = '_price'");
	$data_meta3 = $req_meta3->fetch();
	$req_meta4 = $bdd->query("SELECT * FROM wp9p_postmeta WHERE post_id =$id_wordpress and meta_key='_product_image_gallery'");
	$data_meta4 = $req_meta4->fetch();
	$req_lien_thumb = $bdd->query("SELECT * FROM wp9p_posts WHERE ID ='" . $id_thumbnail . "'");
	$thumbnail_link = $req_lien_thumb->fetch();
	 if(!empty($data))
	{ 
		$array->id=$data['ID'];
		$array->post_title  = $data['post_title'];
		$array->post_content= utf8_encode($data['post_content']);
		$array->slug  = $slug; 
		$array->image  = $thumbnail_link['guid'];
		// echo $data['ID']; 
	}
	else
	{
		$array['id']='1521';
		$array['slug'] = $slug;
	}  
 	echo json_encode($array); 
?>  