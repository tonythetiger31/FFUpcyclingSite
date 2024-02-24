import React from 'react';
import sass from './ThirdPage.sass';
import depopIcon from '../../assets/icons/depopIcon.png';
import ebayIcon from '../../assets/icons/ebayIcon.png';
import mercariIcon from '../../assets/icons/mercariIcon.png';
import poshmarkIcon from '../../assets/icons/poshmarkIcon.png';
import earthImg from '../../assets/icons/earth.png';
import { POSHMARK_LINK, EBAY_LINK, DEPOP_LINK, MERCARI_LINK } from '../../vars';


function ImgLink(props) {
	const { img, link, alt } = props;
	return (
		<a href={link}>
			<img alt={alt} src={img} />
		</a>
	);
}

export default function ThirdPage() {
	return (
		<div className="ThirdPage">
			<div className="textWrapper">
				<div className="thirdPageText firstText">Since 2020 we’ve saved 3000lb of clothes from the trash</div>
				<div className="thirdPageText secondText" >over 2,000 happy customers, and we’d be honored if you where our next</div>
			</div>
			<div className="centeringContainer">
				<div className="thirdPageText thirdText" style={{ "text-decoration": "underline"}}>Check us out!</div>
			</div>
			<div className="centeringContainer" style={{"margin-top":"80px"}}>
				<ImgLink alt="Mercari Logo" img={mercariIcon} link={MERCARI_LINK} />
				<ImgLink alt="Depop logo" img={depopIcon} link={DEPOP_LINK} />
				<ImgLink alt="Ebay logo" img={ebayIcon} link={EBAY_LINK} />
				<ImgLink alt="Poshmark logo" img={poshmarkIcon} link={POSHMARK_LINK} />
			</div>
			<div className='centeringContainer'>
				<img alt="image of earth" src={earthImg} className="earthImg" />
			</div>
		</div>
	);
}
	