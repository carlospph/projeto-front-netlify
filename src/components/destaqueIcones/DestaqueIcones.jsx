import styled from 'styled-components';

const icones = [
	{
		id: 1,
		titulo: "Tênis",
		image: "/tenis__roxo.png",
	},
	{
		id: 2,
		titulo: "Relógio",
		image: "/relogioAtivo.png",
	},
	{
		id: 3,
		titulo: "Calça",
		image: "/calcaAtiva.png",
	},
	{
		id: 4,
		titulo: "Headset",
		image: "/foneAtivo.png",
	},
	{
		id: 5,
		titulo: "Camiseta",
		image: "/camiseta.png",
	}

];

const Container = styled.div`
	display:flex;
	justify-content:center;
	gap:24px;
	margin:0 auto;
	max-width:660px;

		@media (max-width: 600px){
			overflow: hidden;
			overflow-x: auto;
			padding:1rem 1.5em 1rem 10em;
		}
 `;

const Card = styled.div`
 	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:fit-content;
	gap: 5px;
`;

const Title = styled.h5`
	padding: 6px 0 0 0;
	font-size:14px;
`;

const Bodycard = styled.div`
	border:2px solid #ccc;
	padding:1rem;
	border-radius: 50%;
	cursor:pointer;

	img{
		width:54px;
		height:auto;
		width:50px;
		opacity:.6;
	}

	&:hover{
		transition: .4s all;
		border-color:blueviolet;

			img{
				opacity:1;
			}
	}
`;


export const DestaqueIcones = () => {
	return (

		<Container>
			{icones.map((icone) => (

				<Card key={icone.id}>
					<Bodycard>
						<img src={icone.image} alt={icone.titulo} />
					</Bodycard>
					<Title>
						{icone.titulo}
					</Title>
				</Card>
			))}
		</Container>
	);
};
