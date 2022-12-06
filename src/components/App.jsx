import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import ListItem from './ListItem';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [searchData, setSearchData] = useState([]);
	const [showDetails, setShowDetails] = useState(false);
	const [selectedImg, setSelectedImg] = useState('');

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/utils/api.js

		searchArtworks(query).then((json) => {
			setSearchData(json.data);
		});
	}

	function showImgDetail(id, altText) {
		setShowDetails(true);
		setSelectedImg(
			`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
		);
	}

	return (
		<div className="App">
			{!showDetails ? (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />

					<ul>
						{searchData?.map((item) => (
							<ListItem
								key={item.id}
								item={item}
								showImgDetail={showImgDetail}
							/>
						))}
					</ul>
				</>
			) : (
				<ImageDetailsPage selectedImg={selectedImg} />
			)}
			<Footer />
		</div>
	);
}
