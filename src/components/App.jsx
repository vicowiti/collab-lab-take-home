import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [searchData, setSearchData] = useState([]);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setSearchData(json.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />

			<ul>
				{searchData?.map((item) => (
					<li key={item.id}>
						<a href="">
							<h5>Name: {item.title}</h5>
							<p>Artist: {item.artist_title}</p>
						</a>
					</li>
				))}
			</ul>
			<Footer />
		</div>
	);
}
