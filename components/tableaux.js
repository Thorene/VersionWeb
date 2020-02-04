import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="row">
      <Nav vertical tabs className="col-md-3">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Nouveaux produits
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Le top
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Top ventes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Top réductions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
          Top produits
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent vertical activeTab={activeTab} className="col-md-9">
        <TabPane tabId="1">
          <Row>
            <Col sm="4">
            <div className="product-block grid" data-product-id="2331">
                <div className="block-inner">
                    <figure className="image">
                      <a title="" href="https://studiofrancine.be/product/papier-olmec-10x15-20-feuilles-260gr/" className="product-image">
                      <img src="https://studiofrancine.be/wp-content/uploads/2018/12/papier-olmec-10x15_20.jpg" className="attachment-shop_catalog size-shop_catalog wp-post-image"/>
                      </a>
                    </figure>
                </div>
                <div className="caption">
                    <div className="meta">
                      <div className="infor">
                           <div className="product-cats">
                            <a href=""> </a>
                          </div>
                          <span>
10.00&nbsp;€                </span>
                          <div className="groups-button">
                            <div className="addcart">
                                <div className="add-cart">
                                  <a data-product_id="13233" className="bouton_ajouter_panier btn-outline product_type_simple" href="# ">Ajouter au panier</a>
                                  <div className="addcart " id="omega_13233">
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div> 
            </Col>
            <Col sm="4">
              <h4>Contenu 1</h4>
            </Col>
            <Col sm="4">
              <h4>Contenu 1</h4>
            </Col>
            <Col sm="4">
              <h4>Contenu 1</h4>
            </Col>
            <Col sm="4">
              <h4>Contenu 1</h4>
            </Col>
            <Col sm="4">
              <h4>Contenu 1</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;