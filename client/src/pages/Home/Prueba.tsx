import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Prueba = (): JSX.Element => {
	const cajitaRef = useRef(null)
	const cajitaRef2 = useRef(null)
	useEffect(() => {
		gsap.to(cajitaRef.current, {
			x: 250,
			duration: 4,
			scrollTrigger: {
				trigger: cajitaRef.current,
				start: 'top 50%',
                end: 'bottom 40%',
				markers: true,
                toggleActions: 'restart none none none',
                scrub: 4,

			},
		})
	}, [])
	return (
		<div className='bg-zinc-900 w-full'>
			<div className='bg-purple-800 min-h-screen'></div>
			<div className='bg-red-800 min-h-screen'>
				<div ref={cajitaRef} className='bg-white h-[150px] w-[150px]'></div>
				<div
					ref={cajitaRef2}
					className='bg-lime-600 h-[150px] w-[150px] mt-[250px]'
				></div>
			</div>
		</div>
	)
}

export default Prueba
