import { useMemo } from 'react';
import type { Villager, Item } from '../types';
import items from '../../backend/items.json';
import ItemResults from './ItemResults';

function getLoves(villager: Villager) {
	if (!villager) {
		return [];
	}
	const loves: Item[] = villager?.loves?.map((lovedItem: string) => items.find((item) => item.name === lovedItem));
	return loves;
}

export default function VillagerResult({ villager }: { villager: Villager | null }) {
	const loves = useMemo(() => getLoves(villager), [villager]);

	return (
		<div className="container-fluid">
			<h1>
				{villager?.name}
				<img src={villager?.imgSrc}></img>
			</h1>
			<section className="loves">
				<h2>Loves</h2>
				<ItemResults items={loves ?? []} />
			</section>
			<section className="likes">
				<h2>Likes</h2>
			</section>
		</div>
	);
}
