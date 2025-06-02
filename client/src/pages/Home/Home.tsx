import { useEffect, useRef, useCallback, memo } from 'react'
import gsap from 'gsap'
import projectsData from '../../components/cards.json'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'
import Cards from '../../components/Cards'
import Contact from '../contact/Contact'

const Home = (): JSX.Element => {
	// Refs
	const refs = {
		scroll: useRef<HTMLDivElement>(null),
		hero: useRef<HTMLDivElement>(null),
		projects: useRef<HTMLDivElement>(null),
		container: useRef<HTMLDivElement>(null),
		cards: useRef<HTMLDivElement>(null),
		contact: useRef<HTMLDivElement>(null),
		profile: useRef<HTMLDivElement>(null),
		name: useRef<HTMLHeadingElement>(null),
		lastName: useRef<HTMLHeadingElement>(null),
		icon: useRef<HTMLDivElement>(null),
		dev: useRef<HTMLDivElement>(null),
	}

	// Animación de fondo
	const setupBackgroundAnimation = useCallback(() => {
		const sections = gsap.utils.toArray<HTMLElement>('section[data-bgcolor]')
		sections.forEach((section: HTMLElement, index) => {
			const bgcolor = section.dataset.bgcolor || '#000'
			const prevColor =
				index > 0
					? sections[index - 1].dataset.bgcolor || '#000'
					: getComputedStyle(refs.scroll.current!).backgroundColor

			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom',
				end: 'bottom top',
				onEnter: () => {
					gsap.to(refs.scroll.current, {
						backgroundColor: bgcolor,
						duration: 0.5,
						ease: 'none',
					})
				},
				onLeaveBack: () => {
					gsap.to(refs.scroll.current, {
						backgroundColor: prevColor,
						duration: 0.5,
						ease: 'none',
					})
				},
			})
		})
	}, [])

	// Animación del nombre y título
	const setupNameAnimation = useCallback(() => {
		if (refs.name.current && refs.lastName.current && refs.dev.current) {
			// Timeline para la animación del nombre
			const tl = gsap.timeline()
			
			// Animación del nombre
			tl.from(refs.name.current, {
				duration: 2,
				opacity: 0,
				scale: 2,
				ease: 'bounce.out',
				delay: 2
			})
			// Animación del apellido
			.from(refs.lastName.current, {
				duration: 1,
				opacity: 0,
				scale: .5,
				ease: 'bounce.out',
			}, '-=0.5') // Comienza 0.5 segundos antes de que termine la animación anterior
			// Animación del título
			.from(refs.dev.current, {
				duration: 1,
				opacity: 0,
				scale: 2,
				ease: 'bounce.out',
			}, '-=0.5')
		}
	}, [])

	// Animación del texto descriptivo
	const setupTextAnimation = useCallback(() => {
		const text = new SplitType('.text-description', { types: 'words,chars' })
		
		const charsHover = (char: HTMLElement) => {
			gsap.timeline()
				.to(char, {
					y: gsap.utils.random(-50, 50),
					x: gsap.utils.random(-50, 50),
					rotate: gsap.utils.random(-90, 90),
					scale: gsap.utils.random(0.5, 1.5),
					duration: 0.25,
					ease: 'back.out',
					onStart: () => char.removeEventListener('mouseenter', () => charsHover(char)),
				})
				.to(char, {
					y: 0,
					x: 0,
					rotate: 0,
					scale: 1,
					duration: 1,
					ease: 'back.out',
					onComplete: () => {
						setTimeout(() => char.addEventListener('mouseenter', () => charsHover(char)), 100)
					},
				})
		}

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
			char.addEventListener('mouseenter', () => charsHover(char))
		})

		return () => {
			text.chars?.forEach(char => {
				char.removeEventListener('mouseenter', () => charsHover(char))
			})
		}
	}, [])

	// Animación de contacto
	const setupContactAnimation = useCallback(() => {
		if (refs.contact.current) {
			gsap.from(refs.contact.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: refs.contact.current,
					start: 'top center',
					end: 'top 30%',
					toggleActions: 'play none none reverse',
				},
			})
		}
	}, [])

	// Animación de proyectos
	const setupProjectsAnimation = useCallback(() => {
		if (refs.projects.current && refs.cards.current) {
			const totalCardsWidth = refs.cards.current.scrollWidth
			const visibleContainerWidth = refs.projects.current.offsetWidth
			const scrollDistance = totalCardsWidth - visibleContainerWidth

			gsap.from('.cards', {
				opacity: 0,
				duration: 0.5,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: refs.projects.current,
					start: 'top center',
					end: 'bottom top',
				},
			})

			gsap.to('.titulo-experiencias', {
				x: () => `-${scrollDistance}`,
				ease: 'none',
				scrollTrigger: {
					trigger: refs.projects.current,
					start: 'top top',
					end: () => `+=${scrollDistance}`,
					scrub: 4,
				},
			})

			if (scrollDistance > 0) {
				gsap.to(refs.cards.current, {
					x: -scrollDistance,
					ease: 'none',
					scrollTrigger: {
						trigger: refs.projects.current,
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
	}, [])

	useEffect(() => {
		setupBackgroundAnimation()
		setupNameAnimation()
		const textCleanup = setupTextAnimation()
		setupContactAnimation()
		setupProjectsAnimation()

		return () => {
			ScrollTrigger.getAll().forEach(st => st.kill())
			textCleanup?.()
		}
	}, [setupBackgroundAnimation, setupNameAnimation, setupTextAnimation, setupContactAnimation, setupProjectsAnimation])

	return (
		<div ref={refs.scroll}>
			<section
				ref={refs.hero}
				data-bgcolor='#27272a'
				className='flex flex-col lg:justify-center items-center p-4 lg:p-8 min-h-screen w-full overflow-hidden'
			>
				<div
					ref={refs.profile}
					className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-4 lg:gap-0 lg:h-[550px]'
				>
					<img
						src='imagenes/foto.png'
						alt='foto'
						className='h-32 md:h-40 lg:h-[300px] mx-auto lg:mx-0 rounded-full mt-4 lg:mt-0 shadow-lg object-cover'
					/>
					<div className='pt-4 lg:pt-6 text-center lg:text-left space-y-3 px-4 md:px-8 lg:px-0 max-w-[600px]'>
						<div className='flex items-center py-2'>
							<h1 ref={refs.name} className='text-2xl sm:text-3xl lg:text-4xl'>
								Paolo{' '}
							</h1>
							<h1 ref={refs.lastName} className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2'>
								Tello
							</h1>
							<div
								ref={refs.dev}
								className='hidden cursor-pointer lg:flex items-center bg-white text-black rounded-full p-1 px-2 text-[14px] font-bold'
							>
								<p>Full stack Developer</p>
							</div>
						</div>
						<p className='text-description text-sm md:text-base lg:text-2xl font-nunito leading-relaxed'>
							Transformo ideas en experiencias digitales. Como Full Stack
							Developer, creo aplicaciones modernas, eficientes y enfocadas en
							el usuario. Me apasiona aprender, colaborar y construir tecnología
							con propósito.
						</p>
					</div>
				</div>
			</section>

			<section
				ref={refs.projects}
				data-bgcolor='#000'
				className='w-full min-h-screen flex flex-col'
			>
				<h1 className='titulo-experiencias text-center text-3xl md:text-4xl lg:text-5xl mb-8 mt-20'>
					Experiencias
				</h1>

				<div ref={refs.container} className='w-full overflow-hidden'>
					<div ref={refs.cards} className='flex gap-8 md:gap-20 lg:gap-52 px-4 relative z-50'>
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
				ref={refs.contact}
				data-bgcolor='#27272a'
				className='w-full min-h-screen flex flex-col contact'
			>
				<Contact />
			</section>
		</div>
	)
}

export default memo(Home)
