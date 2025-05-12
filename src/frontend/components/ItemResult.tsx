export default function ItemResult({ name, spriteSrc }) {
	return (
		<div className="item-result">
			<img src={spriteSrc} />
			{name}
		</div>
	);
}
