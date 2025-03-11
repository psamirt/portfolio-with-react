import { useEffect, useRef } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cards from '../../components/Cards'
import projectsData from '../../components/cards.json'
gsap.registerPlugin(ScrollTrigger)

const Projects = (): JSX.Element => {
	const [selectedId, setSelectedId] = useState<string | null>(null)
	const cardRefs = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		const columns = 3 // Cambia este valor según la cantidad de columnas de tu grid

		cardRefs.current.forEach((card, index) => {
			const row = Math.floor(index / columns)
			const col = index % columns

			gsap.fromTo(
				card,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					delay: (row + col) * 0.2, // Retrasa cada card según su posición en la cuadrícula
					scrollTrigger: {
						trigger: card,
						start: 'top 85%',
						end: 'bottom 65%',
						scrub: true,
					},
				},
			)
		})
	}, [])

	return (
		<div className=''>
			<h1 className='text-center text-5xl'>Experiencias</h1>
			<div className='max-w-[1640px] h-full mx-auto my-5 flex flex-col md:flex-row justify-between items-center p-4 flex-wrap'>
				{projectsData.map((project, index) => (
					<div key={index} ref={el => (cardRefs.current[index] = el!)}>
						<Cards {...project} />
					</div>
				))}
			</div>
			<AnimatePresence>
				{selectedId && (
					<motion.div
						key={selectedId}
						layoutId={selectedId}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed top-0 right-0 z-10 flex items-center justify-center w-full h-screen bg-black/80'
						onClick={() => setSelectedId(null)}
					>
						<video
							src='videos/gestionCarClip.mp4'
							autoPlay
							muted
							loop
							playsInline
							className='w-full h-auto max-w-6xl'
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Projects
