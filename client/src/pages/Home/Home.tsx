import Carousel from '../../components/Carousel'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import { motion } from 'framer-motion'

const Home = (): JSX.Element => {
	return (
		<div>
			<motion.div
				initial={{
					opacity: 0,
					translateX: 50,
				}}
				animate={{ opacity: 1, translateX: 0, translateY: 0 }}
				transition={{ duration: 2, delay: 0.1 }}
				className='flex flex-col lg:flex-row h-[100vh]  p-4 lg:p-8 items-center lg:justify-evenly'
			>
				{/* Contenedor de la tarjeta de presentación */}
				<div className='max-w-xs lg:max-w-lg text-center flex-col p-2 '>
					<img
						src='imagenes/foto.png'
						alt='foto'
						className='h-36 lg:h-48 rounded-full mt-4 float-left'
					/>
					<div className='pt-4 lg:pt-6 text-center space-y-2 lg:space-y-4'>
						<p className='text-sm md:text-base lg:text-xl font-roboto'>
							Soy un desarrollador Front-end con sólida base en tecnologías
							clave como JavaScript, Node.js, HTML, CSS, Bootstrap, Tailwind y
							Next.js. Comprometido con la excelencia, habituado a trabajar con
							tecnologías ágiles y autodidacta. He desarrollado proyectos
							personales y grupales demostrando creatividad y capacidad de
							resolución de problemas.
						</p>
					</div>
				</div>
				{/* Carrusel de imágenes */}
				<div className='mt-4 lg:mt-0'>
					<Carousel />
				</div>
			</motion.div>
			<hr id='projects' />
			<Projects />
			<hr id='contact' />
			<Contact />
		</div>
	)
}

export default Home
