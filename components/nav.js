import Link from 'next/link' 
import React, {Component} from 'react';
import axios from 'axios';
 import '../pages/css/ajouts.css';
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
 
class Nav extends Component {
	constructor(props, context) {
	  super(props, context);
	   
		this.requete_serveur = this.requete_serveur.bind(this);
		this.maFonction = this.maFonction.bind(this);
		this.recup_parents = this.recup_parents.bind(this);
	
		this.state = {
		 data2: null,
		 trac:[], 
		 items:null
		};}
		componentDidMount() {   
				if(this.state.data2 == null && this.state.items == null)
				{ 
					this.requete_serveur(); 
				}
		}
		maFonction(type1, numero, type3) {
			if(type1 == 'items')
			{
				if (this.state.items == undefined || this.state.items == null){
				return ' ';
				}
				else if(typeof this.state.items== "object" && !Array.isArray(this.state.items) )
				{
					if(this.state[type1][numero] ==undefined)
					{
					return '' ;
					}
					else {
						return this.state[type1][numero][type3 ];
					}
					console.log('ABA');
				} 
				else
				{
					var variable = '';
					console.log(this.state.data2['items']); 
					console.log('AAW MAMAMAEL'+JSON.stringify(this.state.items['po_23639'])); 
					console.log(this.state.items); 
					console.log('AWWW'+variable); 
				} 
		  	} 
			else if(type1 == 'parents')
			{
				if (this.state.parents == undefined || this.state.parents == null)
					{
						return 'BAA';
					}
					else if(typeof this.state.parents== "object" && !Array.isArray(this.state.parents) ){
					
						return this.state[type1][numero]; 
					} 
					else
					{ 
					} 
			}
		}

		  recup_parents(type1) {
			if (this.state.parents == undefined || this.state.parents == null){
				return ['A', 'B'];
			}
			else if(typeof this.state.parents== "object" && !Array.isArray(this.state.parents) ){
				 
				if(type1 == '0')
				{  
					var keys = this.state.parents['0'];
						/*
						if(this.state.parents.hasOwnProperty(number)){
							console.log('Test'+number);
						keys.push(number);
						console.log(number);*/
						  return keys;
						console.log()
						console.log('ABA'); 
				}
				else
				{
					if(this.state.parents[type1]!= undefined)
					{
					var keys = this.state.parents[type1];
					}
					else
					{
						var keys = ['A', 'B'];
						
					}
					return keys;
				}
			}	
			else
			{
				return ['CA', 'B'];
				console.log('Ya rien la dedans');
			} 
		  	}
		  
		requete_serveur() {  
		   axios.post(
			   'https://solutions-web.be/sf_next/recup_menu.php', 
			   {
			   headers: {}
			   }
		   ).then((res) => {
			   console.log('INDEXA TEST MAEL : '+res.data['items']['po_23639']['name']),
			   this.setState({
				   items:res.data['items'],
				   parents:res.data['parents'],
				   data2:res.data 
				   
				} ); 
 				}).catch(error => {
				   console.log("error:", error);
		   });
		}
		render() {
			return (
<div className="row">
	<div className="col-md-4">
		<div className="logo-in-theme pull-left">
			 <div className="logo logo-theme"> <a href="/index" className="custom-logo-link" rel="home"><img width="5000" height="1000" src="https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO.png" className="custom-logo" alt="Studio Francine" srcset="https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO.png 5000w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-600x120.png 600w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-300x60.png 300w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-768x154.png 768w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-1024x205.png 1024w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-1320x264.png 1320w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-24x5.png 24w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-36x7.png 36w, https://studiofrancine.be/wp-content/uploads/2019/03/websiteLOGO-48x10.png 48w" sizes="(max-width: 5000px) 100vw, 5000px"/></a>                                    
			</div>
	    </div> 
	</div>
	<div className="col-md-8">
	<div className="nouveau_menu">
				{
					console.log('PARENT 0 '+this.maFonction('parents', '0', 'name')),
					this.recup_parents('0').map((value, key) => { 
						return(
							<ul className=""><li><Link  href={this.maFonction('items', 'po_'+value, 'lien')}><a>{this.maFonction('items', 'po_'+value, 'name')}
										</a></Link>
							<ul>
							{ 
								this.recup_parents(value).map((value2, key2) => 
								{ 
								return(<li><Link href={this.maFonction('items', 'po_'+value2, 'lien')}><a>{this.maFonction('items', 'po_'+value2, 'name')}</a></Link></li>
								)
								}
								)
							}</ul></li></ul>)
				} )}
				</div>
		</div>
			</div>)};
}

export default Nav