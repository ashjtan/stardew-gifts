import axios from 'axios';

const SEARCH_PLACEHOLDER = 'Item, villager';

async function getAutocompleteSuggestions(event: React.ChangeEvent<HTMLInputElement>) {
	const value = event.target.value;
	try {
		const response = await axios.get(`http://localhost:3000/autocomplete?q=${value}`);
		console.log(response.data);
	} catch (error) {
		console.error('Error fetching autocomplete suggestions:', error);
	}
}

export default function SearchBar() {
	return (
		<form className="container-fluid">
			<input
				type="search"
				aria-label={SEARCH_PLACEHOLDER}
				placeholder={SEARCH_PLACEHOLDER}
				onChange={(e) => getAutocompleteSuggestions(e)}
			/>
			<button type="submit">Search</button>
		</form>
	);
}
