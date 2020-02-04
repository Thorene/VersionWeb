<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: *");	
	include("includes/connect.php"); 
	// $guid = $_POST['guid']; 
	// echo 'GUID : '.$guid; 

	// print_r( $_POST ); 
	$array = Array(); 
	$items = Array();
	$parents = Array();
	$array_final = Array();
	// $req = $bdd->query("SELECT * FROM wp9p_posts WHERE post_type='nav_menu_item' ");
	$req = $bdd->query("SELECT p.*, termes.name as name,  postmeta3.meta_value AS parent, postmeta.meta_value AS cible, postmeta2.meta_value AS type_cible FROM wp9p_posts AS p  JOIN wp9p_term_relationships AS tr ON tr.object_id = p.ID JOIN wp9p_term_taxonomy AS tt ON tt.term_taxonomy_id = tr.term_taxonomy_id JOIN `wp9p_terms` as termes ON termes.term_id = tt.term_id JOIN wp9p_postmeta AS postmeta ON p.ID = postmeta.post_ID JOIN wp9p_postmeta AS postmeta2 ON p.ID = postmeta2.post_ID JOIN wp9p_postmeta AS postmeta3 ON p.ID = postmeta3.post_ID WHERE p.post_type = 'nav_menu_item' AND tt.term_id = '1539' AND postmeta.meta_key = '_menu_item_object_id' AND postmeta3.meta_key = '_menu_item_menu_item_parent' AND postmeta2.meta_key = '_menu_item_object' ORDER BY parent, p.menu_order");
	while($data = $req->fetch())
	{
		$id = $data['ID'];
		$parent = $data['parent'];
		$items['po_'.$id]['menu_order'] = $data['menu_order'];
		$items['po_'.$id]['post_title'] = $data['post_title'];
		$items['po_'.$id]['type_cible'] = $data['type_cible'];
		$items['po_'.$id]['parent'] = $data['parent'];
		$parents[$parent][] = $data['ID'];
 		 
		?>  
				<?php 
					$cible = $data['cible'];
					if($data['type_cible'] == 'page'  OR $data['type_cible'] == 'product')
					{
						$req2 = $bdd->query("SELECT * FROM wp9p_posts WHERE ID ='" . $cible . "'");
						$data2 = $req2->fetch();
 						$items['po_'.$id]['name'] = utf8_encode($data2['post_title']);
						$items['po_'.$id]['slug'] = utf8_encode($data2['post_name']);
						$items['po_'.$id]['lien'] = utf8_encode($data2['post_name']);

 					}
					elseif($data['type_cible'] == 'product_cat' )
					{
						$req2 = $bdd->query("SELECT * FROM wp9p_terms WHERE term_id ='" . $cible . "'");
						$data2 = $req2->fetch();
						$items['po_'.$id]['name'] = utf8_encode($data2['name']);
						$items['po_'.$id]['slug'] = utf8_encode($data2['slug']); 
						$items['po_'.$id]['lien'] =  '/categorie/'.utf8_encode($data2['slug']); 
					}   
	}
	$array_final['parents'] = $parents;
	$array_final['items'] = $items;
	echo json_encode($array_final); 
	/*
	foreach($array['0'] as $key=>$value)
	{
		?>
		<ul>
		<?php
		echo '<li>'.$items[$value]['name'].'</li>';
		if(isset($array[$value]))
		{
			foreach($array[$value] as $key=>$value)
			{
				?>
					<ul>
					<ol><a href="<?php echo $items[$value]['slug'];?>">
						<?php echo utf8_encode($items[$value]['name']). '</a></ol>';
				if(isset($array[$value]))
				{
					foreach($array[$value] as $key=>$value)
					{
						?>
							<ul>
								<ol><a href="#" onclick="window.location='http://localhost:3000/categorie/<?php echo $items[$value]['slug'];?>';">
									<?php echo utf8_encode($items[$value]['name']). '</a></ol>';?>
							</ul>
						<?php
					}
				}
				?>
					</ul>
				<?php
			}
		}
 	}?>*/
?> 