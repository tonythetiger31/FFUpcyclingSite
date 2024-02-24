import React, { useRef, ReactDOM, useEffect } from 'react';
import sass from './ImageWall.sass';
import { TOTAL_CLOTHING_IMAGES } from '../../vars';
const importAll = r => r.keys();
var imageArr = [];

function getRandomArbitrary(min, max) {
	return Math.trunc(Math.random() * (max - min) + min);
}
function getImageRow() {
	var imgRowArr = [];
	for (var i = 0; i < 5; i++) {
		imgRowArr.push(
			<img
				className='clothingImage'
				alt="image of clothing"
				height="30px"
				key={i}
				src={require('../../assets/clothing' +
					'/asset' +
					getRandomArbitrary(0, TOTAL_CLOTHING_IMAGES) +
					'.webp')}
			/>
		);
	}
	return <div className="imgRow">{imgRowArr}</div>;
}

function ImageWallSection() {
	// const ImageWallSectionRef = useRef(null);
	return (
		<div className="ImageWallSection">
			{(() => {
				var allImgArr = [];
				for (var i = 0; i < 100; i++) {
					allImgArr.push(<div key={i}>{getImageRow()}</div>);
				}
				return allImgArr;
			})()}
		</div>
	);
}

export default function ImageWall(props) {
	const { angle = "0deg", margin = 0 } = props;
	const ImageWallRef = useRef(null);
	const imgWallSection = ImageWallSection();
	return (
		<div
			ref={ImageWallRef}
			className="ImageWall"
			style={{
				animation: `scrollDownAt${angle} 60s linear infinite`,
				margin: margin,
			}}
		>
			{imgWallSection}
			{imgWallSection}
		</div>
	);
}
