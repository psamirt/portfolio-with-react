import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Carousel from '../../components/Carousel'
import Projects from '../projects/Projects'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Home = (): JSX.Element => {
	const cardRef = useRef(null)
	const carouselRef = useRef(null)
	const projectsRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				pin: true,
			},
		})

		tl.to(cardRef.current, {
			x: -1000,
			opacity: 1,
			duration: 5,
		})
			.to(
				carouselRef.current,
				{
					x: 1000,
					opacity: 1,
					duration: 5,
				},
				0,
			)
			.to(
				projectsRef.current,
				{
					opacity: 1,
					duration: 2,
				},
				'-=4',
			)
	}, [])

	return (
		<div ref={containerRef} className='h-[170vh] relative'>
			{/* Sección principal */}
			<div className='flex flex-col lg:flex-row p-4 lg:p-8 h-[100vh] absolute items-center lg:justify-evenly z-10 w-full'>
				<div
					ref={cardRef}
					className='max-w-xs lg:max-w-lg text-center justify-center flex-col p-2 overflow-hidden'
				>
					<div className='h-[550px] items-center flex'>
						<img
							src='imagenes/foto.png'
							alt='foto'
							className='h-36 lg:h-48 rounded-full mt-4 float-left'
						/>
						<div className='pt-4 lg:pt-6 text-center space-y-2 lg:space-y-4'>
							<p className='text-sm md:text-base lg:text-xl font-roboto'>
								Soy un desarrollador Front-end con sólida base en tecnologías
								clave como JavaScript, Node.js, HTML, CSS, Bootstrap, Tailwind y
								Next.js...
							</p>
						</div>
					</div>
				</div>

				<div ref={carouselRef} className='mt-4 lg:mt-0 overflow-hidden'>
					<Carousel />
				</div>
			</div>
			<div ref={projectsRef} className='absolute w-full top-20 opacity-0'>
				<Projects />
			</div>
		</div>
	)
}

export default Home
