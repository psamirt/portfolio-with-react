import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import projectsData from '../../components/cards.json'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'
import Cards from '../../components/Cards'
import Contact from '../contact/Contact'

const Home = (): JSX.Element => {
	const profileRef = useRef<HTMLDivElement>(null)
	// const carouselRef = useRef<HTMLDivElement>(null)
	const heroRef = useRef<HTMLDivElement>(null)
	const projectsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const cardsRef = useRef<HTMLDivElement>(null)
	const scrollRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Limpiar ScrollTriggers al desmontar (buena práctica)
		const cleanup = () => {
			ScrollTrigger.getAll().forEach(st => st.kill())
		}

		const sections = gsap.utils.toArray<HTMLElement>('section[data-bgcolor]')

		// Animación de cambio de color de fondo por sección (onEnter y onLeaveBack) - Puntos de trigger ajustados
		sections.forEach((section: HTMLElement, index) => {
			const bgcolor = section.dataset.bgcolor || '#000'

			// Determinar el color de fondo anterior o inicial para onLeaveBack
			const prevColor =
				index > 0
					? sections[index - 1].dataset.bgcolor || '#000' // Color de la sección anterior
					: getComputedStyle(scrollRef.current!).backgroundColor // Color inicial del contenedor principal

			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom', // Comienza la animación *a* el color de esta sección cuando su top entra por abajo
				end: 'bottom top', // La animación *desde* el color de esta sección (hacia arriba) ocurre antes de que su bottom salga por arriba
				onEnter: () => {
					// Al scrollear hacia abajo y el trigger start se cumple
					gsap.to(scrollRef.current, {
						backgroundColor: bgcolor,
						duration: 0.5,
						ease: 'none',
					})
				},
				onLeaveBack: () => {
					// Al scrollear hacia arriba y el trigger start se cruza de nuevo (saliendo de la sección)
					// Animamos de vuelta al color de la sección anterior o inicial
					gsap.to(scrollRef.current, {
						backgroundColor: prevColor,
						duration: 0.5,
						ease: 'none',
					})
				},
				// markers: true, // Muestra marcadores para depuración
			})
		})

		// Animación para el texto del perfil
		const text = new SplitType('.text-description', {
			types: 'words,chars',
		})
		text.chars?.forEach((char, index) => {
			gsap.from(char, {
				y: gsap.utils.random(-150, 150),
				x: gsap.utils.random(-300, 300),
				rotate: gsap.utils.random(-360, 360),
				scale: gsap.utils.random(0, 2),
				opacity: 0,
				duration: 0.75,
				ease: 'back.out',
				delay: index * 0.01,
			})
			char.addEventListener('mouseenter', charsHover)
			function charsHover() {
				gsap
					.timeline()
					.to(char, {
						y: gsap.utils.random(-50, 50),
						x: gsap.utils.random(-50, 50),
						rotate: gsap.utils.random(-90, 90),
						scale: gsap.utils.random(0.5, 1.5),
						duration: 0.25,
						ease: 'back.out',
						onStart: () => {
							char.removeEventListener('mouseenter', charsHover)
						},
					})
					.to(char, {
						y: 0,
						x: 0,
						rotate: 0,
						scale: 1,
						duration: 1,
						ease: 'back.out',
						onComplete: () => {
							setTimeout(() => {
								char.addEventListener('mouseenter', charsHover)
							}, 100)
						},
					})
			}
			return () => {
				cleanup()
				text.chars?.forEach(char => {
					char.removeEventListener('mouseenter', charsHover)
				})
			}
		})

		if (contactRef.current) {
			gsap.from(contactRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: contactRef.current,
					start: 'top center',
					end: 'top 30%',
					toggleActions: 'play none none reverse',
				},
			})
		}

		// Calculo de scroll horizontal
		if (projectsRef.current && cardsRef.current) {
			const projectsSection = projectsRef.current
			const cardsContainer = cardsRef.current
			// Calcula el ancho total de las cards, incluyendo gaps y padding
			const totalCardsWidth = cardsContainer.scrollWidth
			const visibleContainerWidth = projectsSection.offsetWidth
			const scrollDistance = totalCardsWidth - visibleContainerWidth

			// Animación para cards

			gsap.from('.cards', {
				opacity: 0,
				duration: 0.5,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: projectsSection,
					start: 'top center',
					end: 'bottom top',
				},
			})

			// Animación scroll horizontal para proyectos
			gsap.to('.titulo-experiencias', {
				x: () => `-${scrollDistance}`,
				ease: 'none',
				scrollTrigger: {
					trigger: projectsSection,
					start: 'top top',
					end: () => `+=${scrollDistance}`,
					scrub: 4,
				},
			})
			if (scrollDistance > 0) {
				gsap.to(cardsContainer, {
					x: -scrollDistance,
					ease: 'none',
					scrollTrigger: {
						trigger: projectsSection,
						start: 'top top',
						end: () => `+=${scrollDistance}`,
						pin: true,
						scrub: 4,
						anticipatePin: 1,
						invalidateOnRefresh: true,

						// markers: true,
					},
				})
			}
		}

		return cleanup
	}, [])

	return (
		<div ref={scrollRef}>
			{/* Sección principal */}
			<section
				ref={heroRef}
				data-bgcolor='#27272a'
				className='flex flex-col justify-center items-center p-4 lg:p-8 min-h-screen w-full overflow-hidden'
			>
				{/* <div className='max-w-xs lg:max-w-lg text-center justify-center'> */}
				<div
					ref={profileRef}
					className='h-[550px] justify-evenly w-full items-center flex'
				>
					<img
						src='imagenes/foto.png'
						alt='foto'
						className='h-36 lg:h-[300px] rounded-full mt-4 lg:mt-0'
					/>
					<div className='pt-4 lg:pt-6 text-center space-y-2 lg:space-y-4 lg:w-[400px]'>
						<p className='text-description text-sm md:text-base lg:text-4xl font-nunito'>
							Transformo ideas en experiencias digitales. Como Full Stack
							Developer, creo aplicaciones modernas, eficientes y enfocadas en
							el usuario. Me apasiona aprender, colaborar y construir tecnología
							con propósito.
						</p>
						{/* </div> */}
					</div>
				</div>

				{/* <div ref={carouselRef} className='mt-4 lg:mt-0'>
					<Carousel />
				</div> */}
			</section>

			{/* Sección de Proyectos con scroll horizontal pinneado */}
			<section
				ref={projectsRef}
				data-bgcolor='#000'
				className='w-full min-h-screen  flex flex-col '
			>
				<h1 className='titulo-experiencias text-center text-5xl mb-8 mt-20'>
					Experiencias
				</h1>
				{/* Este contenedor tiene overflow-hidden para ocultar las cards fuera de vista */}
				<div ref={containerRef} className='w-full overflow-hidden'>
					{/* Este es el contenedor FLEX que se moverá horizontalmente */}
					<div ref={cardsRef} className='flex gap-52 px-4 relative z-50'>
						<div className='flex-shrink-0 w-[300px] md:w-[400px] lg:w-[300px]' />
						{projectsData.map((project, index) => (
							<div
								key={index}
								className='cards flex-shrink-0'
								// onClick={() => setSelectedId(project.id)}
							>
								<Cards {...project} />
							</div>
						))}
						<div className='flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px]' />
					</div>
				</div>
			</section>
			<section
				ref={contactRef}
				data-bgcolor='#27272a'
				className='w-full min-h-screen  flex flex-col contact '
			>
				<Contact />
			</section>

			{/* Espacio extra para permitir el scroll vertical que controla la animación horizontal */}
			{/* {projectsRef.current &&
				cardsRef.current &&
				projectsRef.current.offsetWidth < cardsRef.current.scrollWidth && (
					<div
						style={{
							height: `${
								cardsRef.current.scrollWidth - projectsRef.current.offsetWidth
							}px`,
						}}
					></div>
				)} */}

			{/* Modal de AnimatePresence */}
			{/* <AnimatePresence>
				{selectedId && (
					<motion.div
						key={selectedId}
						layoutId={selectedId}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed top-0 right-0 z-10 flex items-center justify-center w-full h-screen '
						onClick={() => setSelectedId(null)}
					>
						<div className='text-white text-2xl'>
							Contenido del Proyecto: {selectedId}
						</div>
					</motion.div>
				)}
			</AnimatePresence> */}
		</div>
	)
}

export default Home
