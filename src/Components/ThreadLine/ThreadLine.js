import React from 'react'
import sass from './ThreadLine.sass'

export default function ThreadLine(props) {
	const { angle = 0, hyphenCount = 950, left = 0, color = "black", zIndex = "0"} = props;
	var hyphenString = '';
	for (var i = 0; i < hyphenCount; i++) {
		hyphenString += '-';
	}
	return (
		<div
			style={{ transform: 'rotate(' + angle + 'deg)', left: left + 'vw', color: color, "z-index": zIndex}}
			className="ThreadLine"
		>
			{hyphenString}
		</div>
	);
}