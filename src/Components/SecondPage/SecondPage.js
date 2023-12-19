import React from 'react';
import sass from './SecondPage.sass';

export default function SecondPage() {
	return (
		<div className="SecondPage">
			<div className="productSnippet">insert product photos here</div>
			<div className="secondPageText">
				We rescue <span style={{ "font-weight": "bold" }}>high-quality</span> clothes from trendier eras and give them
				a <span style={{"font-weight": "bold"}}>modern</span> twist, while curating a selection of stylish, <span style={{"text-decoration":"underline"}}>eco-friendly</span> items.
			</div>
		</div>
	);
}
