import axios from 'axios';
import { useState } from 'react';

const SEARCH_PLACEHOLDER = 'Item, villager';

interface AutocompleteSuggestionsProps {
	suggestions: string[];
}

function AutocompleteSuggestions({ suggestions }: AutocompleteSuggestionsProps) {
	const listItems = suggestions.map((suggestion) => (
		<li>
			<a href="#">{suggestion}</a>
		</li>
	));

	return (
		<details className="dropdown">
			<summary></summary>
			<ul dir="rtl">{listItems}</ul>
		</details>
	);
}

export default function SearchBar() {
	const [suggestions, setSuggestions] = useState<string[]>([]);

	// TODO: throttle/debounce, cache, especially for backspacing
	async function fetchAutocompleteSuggestions(query: string) {
		try {
			const response = await axios.get(`http://localhost:3000/autocomplete?q=${query}`);
			console.log(response.data);
			setSuggestions(response.data);
		} catch (error) {
			console.error('Error fetching autocomplete suggestions:', error);
		}
	}

	return (
		<form autoComplete="off" className="container-fluid">
			<input
				type="search"
				list=""
				aria-label={SEARCH_PLACEHOLDER}
				placeholder={SEARCH_PLACEHOLDER}
				onChange={(e) => fetchAutocompleteSuggestions(e.target.value)}
			/>
			<button type="submit">Search</button>

			<div>
				<AutocompleteSuggestions suggestions={suggestions} />
			</div>
		</form>
	);
}
