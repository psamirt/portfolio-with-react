import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
	const [nav, setNav] = useState(false)

	return (
		<div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
			{/* left side */}

			<div className='flex items-center'>
				<div onClick={() => setNav(!nav)} className='cursor-pointer '>
					<AiOutlineMenu size={30} />
				</div>
				<NavLink to='/' className='text-2xl sm:text-3xl lg:text-4xl px-2'>
					Paolo <span className='font-bold'>Tello</span>
				</NavLink>
				<div className='hidden lg:flex items-center bg-white text-black rounded-full p-1 text-[14px] font-bold'>
					<p>Front-end Developer</p>
				</div>
			</div>

			{/* search input */}

			<nav className='flex-col text-white-800 '>
				<ul className='text-xl flex '>
					<NavLink
						to={'/about'}
						className='text-xl mx-6 px-3'
					>
						Acerca de mi
					</NavLink>
					<NavLink
						to={'/projects'}
						className='text-xl mx-6 px-3'
					>
						Proyectos
					</NavLink>
					<NavLink
						to={'/contact'}
						className='text-xl mx-6 px-3'
					>
						Contacto
					</NavLink>
				</ul>
			</nav>

			{/* download button */}
			<a
				href='CV-Samir.pdf'
				download
				className='bg-white text-black hidden md:flex items-center px-3 rounded-full'
			>
				<BsDownload size={20} className='mr-2' />
				CV
			</a>

			{/* Mobile menu */}
			{/* Overlay */}
			{nav ? (
				<div className= {
					nav
					? 'bg-black/80 fixed w-full h-screen z-10 top-0'
					: 'hidden'
				}
				onClick={()=> setNav(false)}
				></div>
			) : (
				''
			)}

			{/* side drawer menu */}
			<div
				className={
					nav
						? 'fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300'
						: 'fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300'
				}
			>
				<AiOutlineClose
					onClick={() => setNav(!nav)}
					size={30}
					className='absolute right-4 top-4 cursor-pointer'
				/>
				<NavLink to='/'>
					<h2 className='text-2xl p-4 m-2'>
						Paolo <span className='font-bold'>Tello</span>
					</h2>
				</NavLink>
				<nav>
					<ul className='flex-col px-4 py-4 text-white-800'>
						<NavLink to='/about' className='text-xl py-4 flex'>
							{' '}
							Acerca de mi{' '}
						</NavLink>
						<NavLink to='/projects' className='text-xl py-4 flex'>
							{' '}
							Proyectos{' '}
						</NavLink>
						<NavLink to='/contact' className='text-xl py-4 flex'>
							{' '}
							Contacto{' '}
						</NavLink>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
