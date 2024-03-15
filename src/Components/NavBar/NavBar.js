import React, { useRef } from 'react';
import sass from './NavBar.sass';
import colorTransparentLogo from '../../assets/logos/colorTransparentLogo.webp';
import whiteTransparentLogo from '../../assets/logos/whiteTransparentLogo.webp';

export default function NavBar(props) {
	const { elementRefs } = props;
	const inputHamurgerProp = useRef(null);
	function scrollToMission() {
		elementRefs.missionPageRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
		console.log('clicked');
		inputHamurgerProp.current.checked = false;
	}
	function scrollToPlatforms() {
		elementRefs.platformsPageRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
		console.log('clicked');
		inputHamurgerProp.current.checked = false;
	}
	return (
		<div className="NavBar">
			<input
				ref={inputHamurgerProp}
				type="checkbox"
				id="menyAvPaa"
				className="menyAvPaa"
			></input>
			<label className="burger" htmlFor="menyAvPaa">
				<div></div>
				<div></div>
				<div></div>
			</label>
			<nav>
				<div
					className="button button-m mission"
					onClick={() => {
						scrollToMission();
					}}
				>
					Mission
				</div>
				<div
					className="button button-m platforms"
					onClick={() => {
						scrollToPlatforms();
					}}
				>
					Platforms
				</div>
				<a
					className="button button-m contact"
					href="mailto:josefinafuentes@ffupcycling.com"
				>
					Contact
				</a>
			</nav>

			<div className="navAndTitleParent">
				<div className="title">
					<img className="titleLogo" src={colorTransparentLogo} />
					UPCYCLING
				</div>
				<div className="navParent">
					<div
						className="button button-d  mission"
						onClick={() => {
							scrollToMission();
						}}
					>
						Mission
					</div>
					<div
						className="button button-d platforms"
						onClick={() => {
							scrollToPlatforms();
						}}
					>
						Platforms
					</div>
					<a
						className="button button-d contact"
						href="mailto:josefinafuentes@ffupcycling.com"
					>
						Contact
					</a>
					<div className="gostElement"></div>
				</div>
			</div>
		</div>
	);
}
