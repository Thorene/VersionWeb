import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav' 
import stylesheet from '../pages/css/maxmega.css';
import '../pages/css/tombas_theme.css';
import '../pages/css/bootstrap.css'; 
import Link from 'next/link';
import axios from 'axios';

const API_PATH = 'https://solutions-web.be/test.php';
class About extends React.Component {
	state = {
    user: 'Ok',
	mail
  }
  componentDidMount () {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
      })
      .then(result => {  
        this.setState({ mailSent:result.data})
        console.log(result);
      })
      .catch(error => this.setState({ error: error.message })); 
  }
  static getInitialProps({query}) {
    return {query}
  }

  render() {
    console.log(this.props.query) // The query is available in the props object 
    return (<div className="container"><Nav/>Click  {this.state.user} <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>
	)
  }
}
 

export default About;

 