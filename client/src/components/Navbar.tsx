import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import gsap from 'gsap'

const Navbar: React.FC = () => {
	const [nav, setNav] = useState(false)
	const nameRef = useRef(null)
	const lastNameRef = useRef(null)
	const iconRef = useRef(null)
	const devRef = useRef(null)

	useEffect(() => {
		if (
			nameRef.current &&
			lastNameRef.current &&
			devRef.current &&
			iconRef.current
		) {
			gsap.from([nameRef.current, lastNameRef.current, devRef.current], {
				duration: 2,
				y: -100,
				ease: 'power3.out',
				stagger: 0.3,
			})
			gsap.from(iconRef.current, {
				opacity: 0,
				duration: 2,
				rotate: 360,
			})
		}
	}, [])
	return (
		<div className='max-w-[1640px] w-full mx-auto flex justify-between items-center p-4 fixed bg-zinc-950 z-[100]'>
			{/* left side */}

			<div className='flex items-center'>
				<div
					ref={iconRef}
					onClick={() => setNav(!nav)}
					className='cursor-pointer block lg:hidden fixed'
				>
					<AiOutlineMenu size={30} />
				</div>
				<h1 ref={nameRef} className='text-2xl ml-7 sm:text-3xl lg:text-4xl '>
					Paolo{' '}
				</h1>
				<h1
					ref={lastNameRef}
					className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2'
				>
					Tello
				</h1>
				<div
					ref={devRef}
					className='hidden lg:flex items-center bg-white text-black rounded-full p-1 px-2 text-[14px] font-bold'
				>
					<p> Full stack Developer</p>
				</div>
			</div>

			{/* download button */}
			<a
				href='CV-Samir.pdf'
				download
				className='bg-slate-50 text-black hidden md:flex items-center px-3 rounded-full hover:bg-slate-300 hover:translate-y-[0.5px]'
			>
				<BsDownload size={20} className='mr-2' />
				CV
			</a>

			{/* side drawer menu */}
			<div
				className={
					nav
						? 'fixed top-0 left-0 w-[300px] h-screen bg-slate-900 z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300'
				}
			>
				<AiOutlineClose
					onClick={() => setNav(!nav)}
					size={30}
					className='absolute right-4 top-4 cursor-pointer'
				/>
				<h1>
					<h2 className='text-2xl p-4 m-2'>
						Paolo <span className='font-bold'>Tello</span>
					</h2>
				</h1>
				<nav>
					<a
						href='CV-Samir.pdf'
						download
						className='bg-slate-50 text-black flex lg:hidden items-center mx-auto w-[70px] px-3 rounded-full hover:bg-slate-300 hover:translate-y-[0.5px]'
					>
						<BsDownload size={20} className='mr-2' />
						CV
					</a>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
