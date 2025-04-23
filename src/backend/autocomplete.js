import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Define routes here

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

const GIFTABLE_VILLAGERS = [
	'abigail',
	'alex',
	'caroline',
	'clint',
	'demetrius',
	'dwarf',
	'evelyn',
	'emily',
	'elliot',
	'george',
	'gus',
	'haley',
	'harvey',
	'jas',
	'jodi',
	'kent',
	'krobus',
	'leo',
	'lewis',
	'leah',
	'linus',
	'maru',
	'marnie',
	'pam',
	'penny',
	'pierre',
	'robin',
	'sandy',
	'sam',
	'sebastian',
	'shane',
	'vincent',
	'wizard',
	'willie',
	'willy',
];

const suggestions = GIFTABLE_VILLAGERS;

app.get('/autocomplete', (req, res) => {
	const query = req.query.q; // Get the query parameter from the request
	if (!query) {
		return res.json([]); // Return an empty array if no query is provided
	}

	const results = suggestions.filter((item) => item.toLowerCase().startsWith(query.toLowerCase()));
	res.json(results);
});
