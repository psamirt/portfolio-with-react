import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'

const Navbar: React.FC = () => {
	const [nav, setNav] = useState(false)

	return (
		<div className='max-w-[1640px] w-full mx-auto flex justify-between items-center p-4 fixed bg-zinc-950 z-[100]'>
			{/* left side */}

			<div className='flex items-center'>
				<div
					onClick={() => setNav(!nav)}
					className='cursor-pointer block lg:hidden fixed'
				>
					<AiOutlineMenu size={30} />
				</div>
				<h1 className='text-2xl ml-7 sm:text-3xl lg:text-4xl px-2'>
					Paolo <span className='font-bold'>Tello</span>
				</h1>
				<div className='hidden lg:flex items-center bg-white text-black rounded-full p-1 text-[14px] font-bold'>
					<p>Front-end Developer</p>
				</div>
			</div>

			{/* search input */}

			<nav className='flex-col text-white-800 '>
				<ul className='text-xl flex '>
					<a
						href=''
						className='hidden lg:flex text-xl mx-6 px-3 hover:translate-y-[0.5px]'
					>
						Acerca de mi
					</a>
					<a
						href='#projects'
						className='hidden lg:flex text-xl mx-6 px-3 hover:translate-y-[0.5px]'
					>
						Experiencias
					</a>
					<a
						href='#contact'
						className='hidden lg:flex text-xl mx-6 px-3 hover:translate-y-[0.5px]'
					>
						Contacto
					</a>
				</ul>
			</nav>

			{/* download button */}
			<a
				href='CV-Samir.pdf'
				download
				className='bg-slate-50 text-black hidden md:flex items-center px-3 rounded-full hover:bg-slate-300 hover:translate-y-[0.5px]'
			>
				<BsDownload size={20} className='mr-2' />
				CV
			</a>

			{/* Mobile menu */}
			{/* Overlay */}
			{nav ? (
				<div
					className={
						nav ? 'bg-black/80 fixed w-full h-screen z-10 top-0' : 'hidden'
					}
					onClick={() => setNav(false)}
				></div>
			) : (
				''
			)}

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
					<ul className='flex-col px-4 py-4 text-white-800'>
						<a
							href=''
							className='text-xl py-4 flex justify-center  hover:translate-y-[0.5px]'
						>
							{' '}
							Acerca de mi{' '}
						</a>
						<a
							href='#projects'
							className='text-xl py-4 flex justify-center  hover:translate-y-[0.5px]'
						>
							{' '}
							Proyectos{' '}
						</a>
						<a
							href='#contact'
							className='text-xl py-4 flex justify-center  hover:translate-y-[0.5px]'
						>
							{' '}
							Contacto{' '}
						</a>
					</ul>
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
