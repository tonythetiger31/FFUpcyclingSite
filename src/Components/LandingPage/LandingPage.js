import React from 'react';
import sass from './LandingPage.sass';
import ImageWall from '../ImageWall/ImageWall';
import ThreadLine from '../ThreadLine/ThreadLine';

export default function LandingPage() {
	return (
		<div className="LandingPage">
			<ThreadLine angle="54" left={30} />
			<ThreadLine angle="104" left={-40} />
			<div className="productSnippet1">
				<ImageWall angle="-30deg"/>
			</div>
			<div className="pageText">
				<span className="cont">
					<span className="pageSubText-1">Revolutionizing</span>
				</span>{' '}
				the fashion industry with a{' '}
				<span className="pageSubText-2">fresh</span> and{' '}
				<span className="pageSubText-3">sustainable</span> approach
			</div>
			<div className="productSnippet2">
				<ImageWall angle="20deg" margin="-1750px 0 0 425px"/>
			</div>
		</div>
	);
}
