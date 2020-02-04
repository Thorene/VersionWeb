import React from 'react'
import Head from 'next/head'
 
import Bloc2 from '../components/bloc2'
import MyCalendar from '../components/calendar' 
import Tableaux from '../components/Tableaux' 
import Nav from '../components/Nav' 
import '../pages/css/maxmega.css';
 
import '../pages/css/tombas_theme.css';
import '../pages/css/bootstrap.css';
import '../pages/css/template.css';
import '../pages/css/ajouts.css';
import Link from 'next/link';
 import SimpleSlider from '../components/SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

 

class HomePage extends React.Component
{
	constructor(props) {
		super(props);
    this.state = {  data2: [] };
    this.requete_serveur = this.requete_serveur.bind(this);
    this.maFonction = this.maFonction.bind(this);
	  }  
    maFonction(numero, type2) {
      if (this.state.data2 == undefined || this.state.data2 == null || this.state.data2 == []){
       return 'B';
      }
      else if(typeof this.state.data2 == "object" && this.state.data2.length > 0){
        if(type2 =='permalink')
        {
          var str =  JSON.parse(this.state.data2[numero])[type2];  
          str = str.replace('https://studiofrancine.be/product', 'produits');
          return str;
        }
        else
        {
          return JSON.parse(this.state.data2[numero])[type2];
        }
         
      }
      return 'A';  
    }
	componentDidMount() {  

 		this.requete_serveur();
    }
	requete_serveur() {  
        axios.post(
            'https://solutions-web.be/sf_next/recup_infos_produits_accueil.php', 
            {
            headers: {}
            }
        ).then((res) => {
			console.log('INDEX : '+res.data),
            this.setState({
                data2:res.data 
             });
             console.log('Ah CC COUCOU : '+JSON.parse(this.state.po_1).permalink),
             console.log('Ah CC COUCOU 2: '+JSON.parse(this.state.po_2).permalink)
             }).catch(error => {
                console.log("error:", error);
        });
    }
	render()
	{
		
		return(
		  <div className="container">
			<Head>
			  <title>Home</title>
			  <link rel="icon" href="/favicon.ico" />
			</Head>

				<Nav />
        <iframe src="http://solutions-web.be/sf_next/recup_menu.php"/>
			<div className="widget-title">
			<h3><span className="title">PRODUITS <span>RECENTS</span></span></h3>
			<a href="#">Voir tout les produits récents</a>
		</div> 
		
		<SimpleSlider /> 
		<MyCalendar/>
		
		
		<Tableaux />
		
		<div className="hero"> 
		  <h1 className="title">Welcome to Next.js!</h1>
		  <p className="description">
			To get started, edit <code>pages/index.js</code> and save to reload.
		  </p>
      
		  
		  <div className="row">
        <img src="http://www.studiofrancine.solutions-web.be/wp-content/uploads/2018/10/banner-adv2.jpg"/>
      </div>
      <div className="row">
          <div className="col-md-8">Screen</div>
          <div className="col-md-4">Samsung Galaxy Tab S2</div>
        </div>
        <div className="row">
          <div className="col-md-2">Screen</div>
          <div className="col-md-2">{this.maFonction(40, 'permalink')}</div>
          <div className="col-md-2">Samsung Galaxy Tab S2</div>
          <div className="col-md-2">Samsung Galaxy Tab S2</div>
          <div className="col-md-2">Samsung Galaxy Tab S2</div>
          <div className="col-md-2">Samsung Galaxy Tab S2</div>
        </div>
        <div className="row">
			<Link href={{ pathname: '/about', query: { name: 'ZEIT' } }}>
			<a>About us</a>
		  </Link>
			<a href="/about" className="card">
			  <h3>Documentation &rarr;</h3>
			  <p>Learn more about Next.js in the documentation.</p>
			</a>
			<a href="https://nextjs.org/learn" className="card">
			  <h3>Next.js Learn &rarr;</h3>
			  <p>Learn about Next.js by following an interactive tutorial!</p>
			</a>
		 
			<a
			  href="https://github.com/zeit/next.js/tree/master/examples"
			  className="card"
			>
			  <h3>Examples &rarr;</h3>
			  <p>Find other example boilerplates on the Next.js GitHub.</p>
			</a>
		  </div>
		</div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
}}; 

export default HomePage;
