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

class Produit extends React.Component {
	constructor(props) {
    super(props);
    this.state = { user: 'Ok', guid:'https://studiofrancine.be/product/canon-xa-15/', mailSent:''};
  }  
  static getInitialProps({query}) {
    return {query}
  } 

  render() {
	  { 

		const url = 'https://solutions-web.be/sf_next/recup_infos.php';
		const options = {
		  method: 'POST', 
		  body: JSON.stringify({
			guid: 10,
			b: 20
		  })
		};

		fetch(url, options)
		  .then(response => {
			  this.setState({ mailSent:response.data})
 			console.log(response);
	  });
	  
	  axios.post('https://solutions-web.be/sf_next/recup_infos.php',
						Qs.stringify({
							guid: this.state.guid
						}), {
							headers: { 
							}
						})
						.then(function (response) {
							this.setState({
						  mailSent: 1
						});
 							console.log("response:", response.data);
						})
						.catch(function (error) {
							console.log("error:", error);
						});
						
	  }
					
					
    console.log(this.props.query) // The query is available in the props object  
    return (<div className="container"><Nav/>Click  {this.state.mailSent} <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>
	)
  }
}
 

export default Produit;