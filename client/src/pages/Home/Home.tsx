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
	const heroRef = useRef<HTMLDivElement>(null)
	const projectsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const cardsRef = useRef<HTMLDivElement>(null)
	const scrollRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const cleanup = () => {
			ScrollTrigger.getAll().forEach(st => st.kill())
		}

		const sections = gsap.utils.toArray<HTMLElement>('section[data-bgcolor]')
		sections.forEach((section: HTMLElement, index) => {
			const bgcolor = section.dataset.bgcolor || '#000'

			const prevColor =
				index > 0
					? sections[index - 1].dataset.bgcolor || '#000'
					: getComputedStyle(scrollRef.current!).backgroundColor
			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom',
				end: 'bottom top',
				onEnter: () => {
					gsap.to(scrollRef.current, {
						backgroundColor: bgcolor,
						duration: 0.5,
						ease: 'none',
					})
				},
				onLeaveBack: () => {
					gsap.to(scrollRef.current, {
						backgroundColor: prevColor,
						duration: 0.5,
						ease: 'none',
					})
				},
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
					},
				})
			}
		}

		return cleanup
	}, [])

	return (
		<div ref={scrollRef}>
			<section
				ref={heroRef}
				data-bgcolor='#27272a'
				className='flex flex-col lg:justify-center items-center p-4 lg:p-8 min-h-screen w-full overflow-hidden'
			>
				<div
					ref={profileRef}
					className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-4 lg:gap-0 lg:h-[550px]'
				>
					<img
						src='imagenes/foto.png'
						alt='foto'
						className='h-32 md:h-40 lg:h-[300px] mx-auto lg:mx-0 rounded-full mt-4 lg:mt-0 shadow-lg object-cover'
					/>
					<div className='pt-4 lg:pt-6 text-center lg:text-left space-y-3 px-4 md:px-8 lg:px-0 max-w-[600px]'>
						<p className='text-description text-sm md:text-base lg:text-2xl font-nunito leading-relaxed'>
							Transformo ideas en experiencias digitales. Como Full Stack
							Developer, creo aplicaciones modernas, eficientes y enfocadas en
							el usuario. Me apasiona aprender, colaborar y construir tecnología
							con propósito.
						</p>
					</div>
				</div>
			</section>

			{/* Sección de Proyectos con scroll horizontal pinneado */}
			<section
				ref={projectsRef}
				data-bgcolor='#000'
				className='w-full min-h-screen  flex flex-col '
			>
				<h1 className='titulo-experiencias text-center text-3xl md:text-4xl lg:text-5xl mb-8 mt-20'>
					Experiencias
				</h1>

				<div ref={containerRef} className='w-full overflow-hidden'>
					<div
						ref={cardsRef}
						className='flex gap-8 md:gap-20 lg:gap-52 px-4 relative z-50'
					>
						<div className='flex-shrink-0 w-[50px] md:w-[150px] lg:w-[300px]' />
						{projectsData.map((project, index) => (
							<div key={index} className='cards flex-shrink-0'>
								<Cards {...project} />
							</div>
						))}
						<div className='flex-shrink-0 w-[50px] md:w-[150px] lg:w-[500px]' />
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
		</div>
	)
}

export default Home
