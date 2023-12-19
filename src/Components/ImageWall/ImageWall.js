import React, { useRef, ReactDOM } from 'react';
import sass from './ImageWall.sass';
const importAll = r => r.keys();
const imageNameList = importAll(require.context('../../assets', false));
var imageArr = [];

function getRandomArbitrary(min, max) {
	return Math.trunc(Math.random() * (max - min) + min);
}
function getImageRow() {
	var imgRowArr = [];
	for (var i = 0; i < 5; i++) {
		imgRowArr.push(
			<img
				width="30px"
				key={i}
				src={require('../../assets/asset' +
					getRandomArbitrary(0, 17) +
					'.png')}
			/>
		);
	}
	return <div className="imgRow">{imgRowArr}</div>;
}

export default function ImageWall() {
	const ImageWallRef = useRef(null);
	return (
		<div ref={ImageWallRef} className="ImageWall">
			{(() => {
				var allImgArr = [];
				for (var i = 0; i < 30; i++) {
					allImgArr.push(<>{getImageRow()}</>);
				}
				return allImgArr;
			})()}
		</div>
	);
}
