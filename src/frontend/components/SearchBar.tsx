const SEARCH_PLACEHOLDER = 'Item, villager';

export default function SearchBar() {
	return (
		<form className="container-fluid">
			<input type="text" placeholder={SEARCH_PLACEHOLDER} />
			<button type="submit">Search</button>
		</form>
	);
}
