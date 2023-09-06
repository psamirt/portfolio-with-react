import Carousel from '../../components/Carousel'

const Home = (): JSX.Element => {
	return (
		<div className='flex w-full h-full py-16 px-4 items-center justify-around '>
			{/* Contenedor del texto */}
			<div className='max-w-2xl text-center'>
				<p  className='text-sm md:text-base lg:text-xl font-special'>
					Soy un desarrollador Front-end con sólida base en tecnologías clave 
					como JavaScript, Node.js, HTML, CSS, Bootstrap, Tailwind y Next.js. 
					Comprometido con la excelencia, habituado a trabajar con tecnologías 
					ágiles y autodidacta. He desarrollado proyectos personales y grupales 
					demostrando creatividad y capacidad de resolución de problemas.
				</p>
			</div>
			{/* carrusel de imagenes */}
			<div className='ml-6'>
				<Carousel />
			</div>
		</div>
	)
}

export default Home
