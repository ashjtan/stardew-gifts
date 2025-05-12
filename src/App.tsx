import { useState } from 'react';
import '@picocss/pico';
import './App.css';
import SearchBar from './frontend/components/SearchBar';
import VillagerResult from './frontend/components/VillagerResult';
import { Villager } from './frontend/types';
import villagers from './backend/villagers.json';

function App() {
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [selectedVillager, setSelectedVillager] = useState<Villager | null>(null);

	const onSuggestionsChange = (suggestions: string[]) => {
		setSuggestions(suggestions);
		if (suggestions.length > 0) {
			const selected = villagers.find((v) => v.name === suggestions[0]);
			setSelectedVillager(selected || null);
		}
	};

	return (
		<>
			<SearchBar suggestions={suggestions} onSuggestionsChange={onSuggestionsChange} />
			<VillagerResult villager={selectedVillager} />
		</>
	);
}

export default App;
