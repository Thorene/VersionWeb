import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav' 
import stylesheet from '../pages/css/maxmega.css';
import '../pages/css/tombas_theme.css';
import '../pages/css/bootstrap.css';
import Link from 'next/link';

const About = () => (

  <div className="container">
	<Nav/>
    <form action="/contact/#wpcf7-f43848-p90-o1" method="post" class="wpcf7-form" novalidate="novalidate">
		<div style={{display: "none"}}>
		<input type="hidden" name="_wpcf7" value="43848"/>
		<input type="hidden" name="_wpcf7_version" value="5.1.1"/>
		<input type="hidden" name="_wpcf7_locale" value="fr_BE"/>
		<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f43848-p90-o1"/>
		<input type="hidden" name="_wpcf7_container_post" value="90"/>
		<input type="hidden" name="g-recaptcha-response" value=""/>
		</div>
		<p><label>Votre nom<br/>
			<span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/></span> </label></p>
		<p><label>Votre email<br/>
			<span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/></span> </label></p>
		<p><label>Titre<br/>
			<span class="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/></span> </label></p>
		<p><label>Votre message<br/>
			<span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </label></p>
		<p><span class="wpcf7-form-control-wrap wpgdprc"><span class="wpcf7-form-control wpcf7-validates-as-required wpcf7-wpgdprc"><span class="wpcf7-list-item"><input type="checkbox" name="wpgdprc" value="1" aria-required="true" aria-invalid="false"/><span class="wpcf7-list-item-label">By using this form you agree with the storage and handling of your data by this website.</span></span></span></span></p>
		<p><input type="submit" value="Send" class="wpcf7-form-control wpcf7-submit"/><span class="ajax-loader"></span></p>
		<div class="wpcf7-response-output wpcf7-display-none"></div></form>
		  </div>
	
);

export default About;