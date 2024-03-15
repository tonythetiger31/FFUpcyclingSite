import React,{props} from 'react';
import sass from './SecondPage.sass';
import { SECOND_PAGE_TEXT_1, SECOND_PAGE_TEXT_2 } from '../../vars';
import ImageWall from '../ImageWall/ImageWall';
import ThreadLine from '../ThreadLine/ThreadLine';

export default function SecondPage(props) {
	const {elementRef} = props

	return (
		<div className="SecondPage" ref={elementRef}>
			<div className="secondPageTextLeft">{SECOND_PAGE_TEXT_1}</div>
			<ThreadLine angle="80" left="-0" color="#ffffff57" />
			<div className="secondPageTextRight">{SECOND_PAGE_TEXT_2}</div>
		</div>
	);
}
