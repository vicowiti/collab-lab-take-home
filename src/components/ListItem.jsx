import React from 'react';

const ListItem = ({ item, showImgDetail }) => {
	return (
		<>
			<li>
				<h5>Name: {item.title}</h5>
				<p>Artist: {item.artist_title}</p>
			</li>
			<button
				onClick={() => showImgDetail(item.image_id, item.thumbnail.alt_text)}
			>
				Show Art
			</button>
		</>
	);
};

export default ListItem;
