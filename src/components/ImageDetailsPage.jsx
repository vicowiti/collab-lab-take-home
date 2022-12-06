import React from 'react';

const ImageDetailsPage = ({ selectedImg, goBack }) => {
	return (
		<div>
			<div>
				<button onClick={goBack}>Back</button>
			</div>
			<div>
				<img alt="" src={selectedImg} />
			</div>
		</div>
	);
};

export default ImageDetailsPage;
