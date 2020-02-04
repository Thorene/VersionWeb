import React from "react";
import Slider from "react-slick";
import axios from "axios";

class SimpleSlider extends React.Component {
  constructor(props) {
		super(props);
		this.state = {data2:[]};
    this.maFonction = this.maFonction.bind(this);
    this.requete_serveur = this.requete_serveur.bind(this);
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
            
            }).catch(error => {
               console.log("error:", error);
       });
   }
	render() { 
	var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
	  autoplay: true,
      speed: 1000,
      autoplaySpeed: 2500,
     };
    return (
      <Slider {...settings}>
        <div className="case">
        <div className="products-grid product">
          <div className="product-block grid" data-product-id="2252">
            <div className="block-inner">
              <figure className="image">
                  <a href="https://studiofrancine.be/product/canon-xa-15/" title="Canon XA-15" className="product-image">
                  <img src="https://studiofrancine.be/wp-content/uploads/2018/12/canon-xa-15-8714574654768-2217c007aa-006-2.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                  </a>
              </figure>
            </div>
            <div className="caption">
              <div className="meta">
                  <div className="infor">
                    <h3 className="name"><a href="https://studiofrancine.be/product/canon-xa-15/" title="" style={{color:"#bababa"}}>Canon XA-15</a></h3>
                    <div className="product-cats">
                        <a href="">Catégorie</a>
                    </div>
                    <span className="price"><span className="woocommerce-Price-amount amount">2249.00</span>
                    </span>
                    <div className="groups-button">
                        <div className="add-cart"> 
                          <a data-product_id="14773" className="bouton_ajouter_panier btn-outline product_type_simple" href="# ">Ajouter au panier</a>
                          <div className="addcart " id="omega_14773">
                                                                                                                  </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div  className="case1">
          <h3> 2 : <a href= { this.maFonction(2, 'permalink')  }> {  this.maFonction(2, 'nom')  ||"ZERRO" }</a>
          </h3></div>
        <div  className="case">
          <h3> <a href= { this.maFonction(3, 'permalink')  }> {  this.maFonction(3, 'nom')  ||"ZERRO" }</a></h3>
          <img src={this.maFonction(3, 'image')} className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
        </div>
        <div  className="case">
          <h3> <a href= { this.maFonction(4, 'permalink')  }> {  this.maFonction(4, 'nom')  ||"ZERRO" }</a></h3>
        </div>
        <div  className="case">
          <h3> <a href= { this.maFonction(5, 'permalink')  }> {  this.maFonction(5, 'nom')  ||"ZERRO" }</a></h3>
        </div>
        <div  className="case">
          <h3> <a href= { this.maFonction(6, 'permalink')  }> {  this.maFonction(6, 'nom')  ||"ZERRO" }</a></h3>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;