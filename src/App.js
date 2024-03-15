import React, { useRef } from 'react';
import NavBar from './Components/NavBar/NavBar';
import logo from './logo.svg';
import scss from './App.sass';
import LandingPage from './Components/LandingPage/LandingPage';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import Footer from './Components/Footer/Footer';

function App() {
	const missionPageRef = useRef(null);
	const platformsPageRef = useRef(null);

	return (
		<div className="App">
			<NavBar elementRefs={{ missionPageRef, platformsPageRef }} />
			<LandingPage />
			<Arrow elementRef={missionPageRef} />
			<SecondPage elementRef={missionPageRef} />
			<ThirdPage elementRef={platformsPageRef} />
			<Footer />
		</div>
	);
}

function Arrow(props) {
	const { elementRef } = props;
	function scrollToMission() {
		elementRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
	return (
		<div className="arrowButtonContainer">
			<div className="arrowButton">
				<span
					class="material-symbols-outlined"
					onClick={() => {
						scrollToMission();
					}}
				>
					arrow_circle_down
				</span>
			</div>
		</div>
	);
}

export default App;
