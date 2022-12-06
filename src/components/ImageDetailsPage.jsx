import React from 'react';

const ImageDetailsPage = ({ selectedImg }) => {
	return (
		<div>
			<div>
				<button>Back</button>
			</div>
			<div>
				<img alt="" src={selectedImg} />
			</div>
		</div>
	);
};

export default ImageDetailsPage;
