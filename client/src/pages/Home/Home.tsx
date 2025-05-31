import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Carousel from '../../components/Carousel'
import Projects from '../projects/Projects'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'

const Home = (): JSX.Element => {
	const cardRef = useRef(null)
	const carouselRef = useRef(null)
	const projectsRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
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
		})

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
			opacity: 0,
			duration: 5,
			onStart: () => {
				gsap.set(cardRef.current, { zIndex: 10 })
			},
			onReverseComplete: () => {
				gsap.set(cardRef.current, { zIndex: 20 })
			},
		})
			.to(
				carouselRef.current,
				{
					x: 1000,
					opacity: 0,
					duration: 5,
					onStart: () => {
						gsap.set(carouselRef.current, { zIndex: 10 })
					},
					onReverseComplete: () => {
						gsap.set(carouselRef.current, { zIndex: 20 })
					},
				},
				0,
			)
			.to(
				projectsRef.current,
				{
					opacity: 1,
					duration: 2,
					onStart: () => {
						gsap.set(projectsRef.current, { zIndex: 30 })
					},
					onComplete: () => {
						gsap.set(projectsRef.current, { zIndex: 20 })
					},
					onReverseComplete: () => {
						gsap.set(projectsRef.current, { zIndex: 0 })
					},
				},
				'-=3',
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
							className='h-36 lg:h-48 rounded-full mt-4 lg:mt-0'
						/>
						<div className='pt-4 lg:pt-6 text-center space-y-2 lg:space-y-4'>
							<p className='text-description text-sm md:text-base lg:text-xl font-roboto'>
								Transformo ideas en experiencias digitales. Como Full Stack
								Developer, combino React, Node.js y la nube para crear
								aplicaciones modernas, eficientes y enfocadas en el usuario. Me
								apasiona aprender, colaborar y construir tecnología con
								propósito.
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
