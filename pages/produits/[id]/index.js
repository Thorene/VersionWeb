import React from 'react'
import Head from 'next/head'
import stylesheet from '../../../pages/css/maxmega.css';
import '../../../pages/css/tombas_theme.css';
import '../../../pages/css/bootstrap.css';
import Link from 'next/link';
import axios from 'axios';
const API_PATH = 'https://solutions-web.be/sf_next/recup_infos.php';
import fetch from 'isomorphic-fetch';
import Qs from 'Qs'; 
import Nav from '../../../components/nav';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useRouter } from 'next/router';  


	
class Produit extends React.Component {
	   
 
    constructor(props) {
        super(props);
        this.state = {
            user: 'Ok',
            guid:'',
            mailSent:''
        }; 
        this.requete_serveur = this.requete_serveur.bind(this);
		
    }
	 
	 
    componentDidMount() { 
		this.setState({slug:window.location.pathname.replace("produits/","").replace("/", ""), 
		});
		 

 		this.requete_serveur();
    }
	 
    requete_serveur() {  
        axios.post(
            'https://solutions-web.be/sf_next/recup_infos.php',
            Qs.stringify({
                slug: window.location.pathname.replace("produits/","").replace("/", "").replace("/", "")
            }),
            {
            headers: {}
            }
        ).then((res) => {
            this.setState({
                id: res.data.id,
                nom_produit: res.data.post_title,
                content: res.data.post_content,
                slug: res.data.slug,
                image: res.data.image
            });
            console.log("response:", res);
            }).catch(error => {
                console.log("error:", error);
        });
    }
    render() {
        console.log('AA : '+this.state.nom_produit+'Slug : ' +this.state.slug) // The query is available in the props object
        return (
            <div   className="container">
                <Nav/>
                <div className="row">
                <div className="col-md-4"> 
                <img style={{width:'200px'}}src={this.state.image|| 'No'}/>
                  {this.state.id || 'No'}<br/>
                {this.state.nom_produit || 'No'}<br/>
               
                 </div>
                 <div className="col-md-8">
                    {ReactHtmlParser(this.state.content)} 
                </div>  
                </div>  
            </div>
        );
    }
}

export default Produit;