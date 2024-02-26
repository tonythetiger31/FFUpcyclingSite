import React from 'react';
import sass from './NavBar.sass';
import colorTransparentLogo from '../../assets/logos/colorTransparentLogo.webp';
import whiteTransparentLogo from '../../assets/logos/whiteTransparentLogo.webp';

export default function NavBar() {
	return (
		<div className="NavBar">
			<h3 className="logo">
				<img width="70px" src={whiteTransparentLogo}></img>
			</h3>
			<div className="navAndTitleParent">
				<div className="title">
					<img width="70px" src={colorTransparentLogo} />UPCYCLING
				</div>
				<div className="navParent">
					<div className="button mission">Mission</div>
					<div className="button platforms">Platforms</div>
					<div className="button contact">Contact</div>
					<div className="button contact">About us</div>
					<div className="gostElement"></div>
				</div>
			</div>
		</div>
	);
}
