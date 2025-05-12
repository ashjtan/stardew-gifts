import { Item } from '../types';
import ItemResult from './ItemResult';

export default function ItemResults({ items }) {
	const itemResults = items.map((item) => <ItemResult {...item} />);

	return itemResults;
}
