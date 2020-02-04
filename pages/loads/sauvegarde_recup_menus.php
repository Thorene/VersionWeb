<table>
<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: *");	
	include("includes/connect.php"); 
	// $guid = $_POST['guid']; 
	// echo 'GUID : '.$guid; 

	// print_r( $_POST ); 
	$array = Array(); 
	$items = Array();
	$array_final = Array();
	// $req = $bdd->query("SELECT * FROM wp9p_posts WHERE post_type='nav_menu_item' ");
	$req = $bdd->query("SELECT p.*, termes.name as name, termes.slug as slug_cible , postmeta3.meta_value AS parent, postmeta.meta_value AS cible, postmeta2.meta_value AS type_cible FROM wp9p_posts AS p  JOIN wp9p_term_relationships AS tr ON tr.object_id = p.ID JOIN wp9p_term_taxonomy AS tt ON tt.term_taxonomy_id = tr.term_taxonomy_id JOIN `wp9p_terms` as termes ON termes.term_id = tt.term_id JOIN wp9p_postmeta AS postmeta ON p.ID = postmeta.post_ID JOIN wp9p_postmeta AS postmeta2 ON p.ID = postmeta2.post_ID JOIN wp9p_postmeta AS postmeta3 ON p.ID = postmeta3.post_ID WHERE p.post_type = 'nav_menu_item' AND tt.term_id = '1539' AND postmeta.meta_key = '_menu_item_object_id' AND postmeta3.meta_key = '_menu_item_menu_item_parent' AND postmeta2.meta_key = '_menu_item_object' ORDER BY parent, p.menu_order");
	while($data = $req->fetch())
	{
		$id = $data['ID'];
		$parent = $data['parent'];
		$items[$id]['menu_order'] = $data['menu_order'];
		$items[$id]['post_title'] = $data['post_title'];
		$items[$id]['type_cible'] = $data['type_cible'];
		$items[$id]['parent'] = $data['parent'];
 		 
		?>
		<tr>
			<td>
				<?php echo  $data['ID'].'<br/>';
				?> 
			</td>
			<td>
				<?php echo $data['menu_order'].'<br/>';
				?>
			</td>
			<td>
				<?php echo $data['post_title'].'<br/>';
				?>
			</td>
			<td>
				<?php echo $data['type_cible'].'<br/>';
				?>
			</td>
			<td>
				<?php echo $data['parent'].'<br/>';
					$array[$parent][] = $data['ID'];
				?>
			</td>
			<td>
				<?php 
					$cible = $data['cible'];
					if($data['type_cible'] == 'page'  OR $data['type_cible'] == 'product')
					{
						$req2 = $bdd->query("SELECT * FROM wp9p_posts WHERE ID ='" . $cible . "'");
						$data2 = $req2->fetch();
						echo $data2['post_title'];
						$items[$id]['name'] = $data2['post_title'];
						$items[$id]['slug'] = $data2['slug'];

 					}
					elseif($data['type_cible'] == 'product_cat' )
					{
						$req2 = $bdd->query("SELECT * FROM wp9p_terms WHERE term_id ='" . $cible . "'");
						$data2 = $req2->fetch();
						$items[$id]['name'] = $data2['name'];
						$items[$id]['slug'] = $data2['slug']; 
					}
				?>
			</td> 
			<td>
				<?php echo $data['cible'].'<br/>';
				?>
			</td> 
		</tr>
		<?php
		
	}
	$array_final['data'] = $data;
	$array_final['items'] = $items;
  ?>  <br/>
<?php
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
 	}?>*/?>
	</ul>
</table>