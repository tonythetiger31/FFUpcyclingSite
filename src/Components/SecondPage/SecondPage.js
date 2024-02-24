import React from 'react';
import sass from './SecondPage.sass';
import { SECOND_PAGE_TEXT_1, SECOND_PAGE_TEXT_2 } from '../../vars';
import ImageWall from '../ImageWall/ImageWall';
import ThreadLine from '../ThreadLine/ThreadLine';

export default function SecondPage() {
	return (
		<div className="SecondPage">
			<div className="secondPageTextLeft">
				{SECOND_PAGE_TEXT_1}	
			</div>
			<ThreadLine angle="70" left="-10" />
			<div className="secondPageTextRight">
				{SECOND_PAGE_TEXT_2}
			</div>
		</div>
	);
}
