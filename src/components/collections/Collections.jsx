// import "./Collections.css";
import styles from "./Collections.module.css";

export const Collections = () => {
	const collections = [
		{
			id: 1,
			discount: "30% OFF",
			title: "Novo drop supreme",
			imageSrc: "/colletion-camisa.png",
			altText: "Coleção 1",
		},
		{
			id: 2,
			discount: "30% OFF",
			title: "Coleção Nike",
			imageSrc: "/colletion-tenis.png",
			altText: "Coleção 2",
		},
		{
			id: 3,
			discount: "30% OFF",
			title: "Novo Bets Bass",
			imageSrc: "/colletion-headset.png",
			altText: "Coleção 3",
		},
	];

	return (
		<div className={styles.container__collections}>
			{collections.map((collection) => (
				<div className={styles.card} key={collection.id}>
					<div className={styles.item__off}>{collection.discount}</div>
					<div className={styles.title}>{collection.title}</div>
					<img className={styles.image__card} src={collection.imageSrc} alt={collection.altText} />
					<button className={styles.btn__colletion}>Comprar</button>
				</div>
			))}
		</div>
	);
};
