 import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sliders.css';

 import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Dados dos slides em um array de objetos
const slideData = [
	{
		id: 1,
		smallTitle: "Ofertas especiais de tênis e calçados",
		mainTitle: "Queima de stoque Nike",
		description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
		buttonText: "Ver oferta",
		imageSrc: "/tenis1.png",
		imageAlt: "Tênis esportivo branco",
	},
	{
		id: 2,
		smallTitle: "Modelos exclusivos de tênis",
		mainTitle: "Modelo para exigentes",
		description: "Calçando bem para quem quer um modelo que faça seu estilo para o cotidiano e para chamar atenção.",
		buttonText: "Ver oferta",
		imageSrc: "/tenis2.png",
		imageAlt: "Tênis casual cinza e rosa",
	},
	{
		id: 3,
		smallTitle: "Modelos para o cotidiano",
		mainTitle: "Quem busca conforto diário",
		description: "Ao público que busca conforto e estilo, o tênis é uma escolha essencial. Ele oferece suporte e conforto.",
		buttonText: "Ver oferta",
		imageSrc: "/thumbnail2.png",
		imageAlt: "Tênis moderno preto",
	},
];

// componente padrão
export const Sliders = () => {
	return (
		<div className="container">
 		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			{/* Mapeia os dados para renderizar os SwiperSlides */}
			{slideData.map((slide) => (
				<SwiperSlide key={slide.id}>
					<div className="row d-flex flex-row align-items-center container px-4">
						<div className="col-12 col-md-6 order-2 order-md-1">
							<h4 className="title__small__carrossel">{slide.smallTitle}</h4>
							<h3 className="title__main__carrossel">{slide.mainTitle}</h3>
							<p className="mb-3 py-2 description">{slide.description}</p>
							<button className="btn btn__primary">{slide.buttonText}</button>
						</div>
						<div className="col-12 col-md-6 order-1 order-md-2">
							<img src={slide.imageSrc} alt={slide.imageAlt} className='w-100'/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
		</div>
	);
};