import NavBar from './Components/NavBar/NavBar';
import logo from './logo.svg';
import scss from './App.sass';
import LandingPage from './Components/LandingPage/LandingPage';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import Footer from './Components/Footer/Footer'

function App() {
	return (
		<div className="App">
			<NavBar />
			<LandingPage />
			<Arrow />
			<SecondPage />
			<ThirdPage/>
			<Footer/>
		</div>
	);
}

function Arrow() {
	return (
		<div className="arrowButtonContainer">
			<div className="arrowButton">
				<span className="material-symbols-outlined">arrow_downward</span>
			</div>
		</div>
	);
}

export default App;
