import React from 'react';
import sass from './LandingPage.sass';
import ImageWall from '../ImageWall/ImageWall';

export default function LandingPage() {
	return (
		<div className="LandingPage">
			<div className="pageText">
				<span className="pageSubText-1">Revolutionizing</span> the fashion
				industry with a <span className="pageSubText-2">fresh</span> and{' '}
				<span className="pageSubText-3">sustainable</span> approach
			</div>
			<div className="productSnippet">
				<ImageWall/>
			</div>
		</div>
	);
}
