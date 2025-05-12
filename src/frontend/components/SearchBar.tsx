import axios from 'axios';

const SEARCH_PLACEHOLDER = 'Item, villager';

interface AutocompleteSuggestionsProps {
	suggestions: string[];
}

interface SearchBarProps {
	suggestions: string[];
	onSuggestionsChange: (suggestions: string[]) => void;
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

export default function SearchBar({ suggestions, onSuggestionsChange }: SearchBarProps) {
	// TODO: throttle/debounce, cache, especially for backspacing
	async function onSearch(query: string) {
		// Fetch autocomplete suggestions
		try {
			const response = await axios.get(`http://localhost:3000/autocomplete?q=${query}`);
			console.log(response.data);
			onSuggestionsChange(response.data);
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
				onChange={(e) => onSearch(e.target.value)}
			/>

			{/* <div>
				<AutocompleteSuggestions suggestions={suggestions} />
			</div> */}
		</form>
	);
}
