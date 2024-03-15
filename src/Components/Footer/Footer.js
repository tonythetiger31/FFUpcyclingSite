import React from 'react';
import sass from './Footer.sass';
import { POSHMARK_LINK, EBAY_LINK, DEPOP_LINK, MERCARI_LINK } from '../../vars';
import ThreadLine from '../ThreadLine/ThreadLine';
import whiteTransparentLogo from '../../assets/logos/whiteTransparentLogo.webp';

function Footer() {
	return (
		<div className="Footer">
			<div className="leftFooter">
				<div className="fTitle">
					<img className="titleLogo" src={whiteTransparentLogo}></img>{' '}
					UPCYCLING
				</div>
				<div className="infoText">
					Contact us: exampleemail@gmail.com
					<br />
					<a href={DEPOP_LINK}>depop</a> <a href={MERCARI_LINK}>mercari</a>
					{''} <a href={EBAY_LINK}>ebay</a>{' '}
					<a href={POSHMARK_LINK}>poshmark</a>
					<br />
					<a href={POSHMARK_LINK}>About us</a>
				</div>
				<div className="copyrightTag-d">© FFUpcycling 2024</div>
			</div>

			<ThreadLine angle="286.06" color="white" zIndex="-2" left="-10" />
			<div className="rightFooter">
				<div className="insideRightFooter">
					<form name="contact" method="POST" data-netlify="true">
						<label>
							Sign up for our newsletter
							<input
								type="text"
								name="email"
								placeholder="Your Email Here"
							></input>
						</label>
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="copyrightTag-m">© FFUpcycling 2024</div>
		</div>
	);
}

export default Footer;
