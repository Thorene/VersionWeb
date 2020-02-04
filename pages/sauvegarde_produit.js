import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav' 
import stylesheet from '../pages/css/maxmega.css';
import '../pages/css/tombas_theme.css';
import '../pages/css/bootstrap.css';
import Link from 'next/link';
import axios from 'axios';
const API_PATH = 'https://solutions-web.be/sf_next/recup_infos.php';
import fetch from 'isomorphic-fetch';
import Qs from 'Qs'; 
import { useRouter } from 'next/router';

	
class Produit extends React.Component {
	   
 
    constructor(props) {
        super(props);
        this.state = {
            user: 'Ok',
            guid:'https://studiofrancine.be/product/canon-xa-15/',
            mailSent:''
        };
		 
        this.requete_serveur = this.requete_serveur.bind(this);
		
    }
	 
	 
    componentWillMount() { 

    }
	static async getInitialProps({ res }) {
		if (res) {
		  res.writeHead(302, {
			// Location: '/about'
		  })
		  res.end()
		} else {
		  // Router.push('/about')
		}
		return {}
	  }
    requete_serveur() {  
        axios.post(
            'https://solutions-web.be/sf_next/recup_infos.php',
            Qs.stringify({
                guid: this.state.guid
            }),
            {
            headers: {}
            }
        ).then((res) => { 
            this.setState({
                id: res.data.id,
                nom_produit: res.data.post_title
            });
            console.log("response:", res);
            }).catch(error => {
                console.log("error:", error);
        });
    }
    render() {
        console.log('A : '+this.state.mailSent) // The query is available in the props object
        return (
            <div className="container">
                <Nav/> 
                Click  {this.state.id || 'No'}<br/>
                Click {this.state.nom_produit || 'No'}
				Here is the id that was passed: {this.props.router.query.id}
                <Link href={{
                    pathname: 'about',
                    query: { name: 'leangchhean' }}
                }> 
                     <a>here</a>
                </Link> 
            </div>
        );
    }
}

export default Produit;