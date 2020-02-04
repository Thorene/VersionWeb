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


	
class Categorie extends React.Component {
	   
 
    constructor(props) {
        super(props);
        this.state = {
            user: 'Ok',
            guid:'',
            mailSent:'',
            axios:'no',
            liste_produits:[['A', 'B']]
        }; 
        this.requete_serveur = this.requete_serveur.bind(this);
        this.maFonction = this.maFonction.bind(this);
		
    }
    maFonction() {
        if (this.state.data == undefined || this.state.data == null || this.state.data == []){
         return {};
        }
        else if(typeof this.state.data  == "object" && this.state.data.length > 0){
           
            return this.state.data;
        }  
      }
	 
    componentDidMount() { 
		this.setState({slug:window.location.pathname.replace("produits/","").replace("/", ""), 
		});
		  
 		this.requete_serveur();
    }
	 
    requete_serveur() {  
        axios.post(
            'https://solutions-web.be/sf_next/recup_infos_categorie.php',
            Qs.stringify({
                slug: window.location.pathname.replace("categorie/","").replace("/", "").replace("/", "")
            }),
            {
            headers: {}
            }
        ).then((res) => {
            this.setState({
                 liste_produits:res.data,
                 axios:'ok',
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
                {
                     this.state.axios = 'ok'?
                      this.state.liste_produits.map(function(item, i){
                        console.log(item.image);
                          return(
                             <div className="col-md-2"><img src={item.image}/><br/>
                             <a href={item.lien}>{item.nom}</a>
                             </div>)
                       
                     }
                     ):'aw'
                } 
                     
                </div>  
            </div>
        );
    }
}

export default Categorie;