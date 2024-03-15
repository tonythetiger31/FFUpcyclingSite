import React, { props } from 'react';
import sass from './ThirdPage.sass';
import depopIcon from '../../assets/icons/depopIcon.webp';
import ebayIcon from '../../assets/icons/ebayIcon.webp';
import mercariIcon from '../../assets/icons/mercariIcon.webp';
import poshmarkIcon from '../../assets/icons/poshmarkIcon.webp';
import earthImg from '../../assets/icons/earth.svg';
import { POSHMARK_LINK, EBAY_LINK, DEPOP_LINK, MERCARI_LINK } from '../../vars';

function ImgLink(props) {
	const { img, link, alt, size } = props;
	return (
		<a href={link}>
			<img className="ImgLink" length={size} alt={alt} src={img} />
		</a>
	);
}

export default function ThirdPage(props) {
	const { elementRef } = props;
	return (
		<div className="ThirdPage" ref={elementRef}>
			<div className="textWrapper">
				<div className="thirdPageText firstText">
					Since 2020 we’ve saved 3000lb of clothes from the trash
				</div>
				<div className="thirdPageText secondText">
					over 2,000 happy customers, and we’d be honored if you where our
					next
				</div>
			</div>
			<div className="centeringContainer" style={{ 'margin-top': '80px' }}>
				<ImgLink alt="Depop logo" img={depopIcon} link={DEPOP_LINK} />
				<ImgLink alt="Mercari Logo" img={mercariIcon} link={MERCARI_LINK} />
				<ImgLink alt="Ebay logo" img={ebayIcon} link={EBAY_LINK} />
				<ImgLink
					size="160"
					alt="Poshmark logo"
					img={poshmarkIcon}
					link={POSHMARK_LINK}
				/>
			</div>
			<div className="globe">
				<img alt={'earth'} src={earthImg} />
			</div>
		</div>
	);
}
