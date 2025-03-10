import { useState } from 'react'
import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoTailwindCss,
	BiSolidFileCss,
	BiLogoJavascript,
	BiLogoRedux,
	BiLogoPostgresql,
	BiLogoMongodb,
	BiLogoGithub,
	BiLogoAngular,
	BiLogoHtml5,
	BiLogoBootstrap,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import { SiSass, SiReactquery } from 'react-icons/si'
import { AnimatePresence, motion } from 'framer-motion'

const Projects = (): JSX.Element => {
	const [selectedId, setSelectedId] = useState<string | null>(null)

	return (
		<div className=''>
			<h1 className='text-center text-5xl'>Experiencias</h1>
			<div className='max-w-[1640px] h-full mx-auto my-5 flex flex-col md:flex-row justify-between items-center p-4 flex-wrap'>
				{/* Algo Grill */}
				<div className='flex flex-col items-center'>
					<div className='hover:scale-[1.02] ease-in duration-300 '>
						<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
							<div className='mb-4'>
								<img
									src='imagenes/algoGrill.png'
									alt='algogrill'
									className='h-auto mx-auto w-96'
								/>
							</div>
							<div className='mb-4'>
								<h1 className='text-xl font-bold text-center font-roboto'>
									Algo Grill
								</h1>
								<p className='italic text-center '>
									Aplicación dedicada la creación y búsqueda de descripción de
									videojuegos.
								</p>
							</div>
							<div>
								<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
									Tecnologías Aplicadas
								</h3>
								<ul className='flex flex-wrap items-center justify-center space-x-4'>
									<li className='flex flex-col items-center'>
										<BiLogoTypescript size={35} className='text-blue-500' />
										<span className='text-xs'>Typescript</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoReact size={35} className='text-blue-400' />
										<span className='text-xs'>React</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoTailwindCss size={35} className='text-teal-400' />
										<span className='text-xs'>Tailwind</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiSolidFileCss size={35} className='text-gray-600' />
										<span className='text-xs'>CSS</span>
									</li>
								</ul>
							</div>
						</figure>
					</div>
					<div className='flex items-center w-full justify-evenly'>
						<a
							href='https://algogrill.vercel.app/'
							target='_blank'
							className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
						>
							<span>Algo Grill</span>
						</a>{' '}
						<a
							href='https://github.com/psamirt/algogrill'
							target='_blank'
							className='hover:translate-y-[0.7px] hover:text-gray-200'
						>
							<BiLogoGithub size={45} />
						</a>
					</div>
				</div>

				{/* gamerzone */}
				<div className='flex flex-col items-center'>
					<div className='hover:scale-[1.02] ease-in duration-300 '>
						<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
							<div className='mb-4'>
								<img
									src='imagenes/homePageGZ.png'
									alt='gamerzone'
									className='h-auto mx-auto w-96'
								/>
							</div>
							<div className='mb-4'>
								<h1 className='text-xl font-bold text-center font-roboto'>
									Gamer Zone
								</h1>
								<p className='italic text-center '>
									Aplicación dedicada la creación y búsqueda de descripción de
									videojuegos.
								</p>
							</div>
							<div>
								<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
									Tecnologías Aplicadas
								</h3>
								<ul className='flex flex-wrap items-center justify-center space-x-4'>
									<li className='flex flex-col items-center'>
										<BiLogoJavascript size={35} className='text-yellow-500' />
										<span className='text-xs'>Javascript</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoReact size={35} className='text-blue-400' />
										<span className='text-xs'>React</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoRedux size={35} className='text-violet-600' />
										<span className='text-xs'>Redux</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiSolidFileCss size={35} className='text-gray-600' />
										<span className='text-xs'>CSS</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoPostgresql size={35} className='text-sky-600' />
										<span className='text-xs'>PostgreSQL</span>
									</li>
								</ul>
							</div>
						</figure>
					</div>
					<div className='flex items-center w-full justify-evenly'>
						<a
							href='https://gamezone-six.vercel.app/'
							target='_blank'
							className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
						>
							<span>Gamer Zone</span>
						</a>{' '}
						<a
							href='https://github.com/psamirt/Gamer-Zone'
							target='_blank'
							className='hover:translate-y-[0.7px] hover:text-gray-200'
						>
							<BiLogoGithub size={45} />
						</a>
					</div>
				</div>

				{/* ReStore */}
				<div className='flex flex-col items-center'>
					<div className='hover:scale-[1.02] ease-in duration-300 '>
						<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
							<div className='mb-4'>
								<img
									src='imagenes/restore.png'
									alt='restore'
									className='h-auto mx-auto w-96'
								/>
							</div>
							<div className='mb-4'>
								<h1 className='text-xl font-bold text-center font-roboto'>
									ReStore
								</h1>
								<p className='italic text-center '>
									E-commerce inspirada en venta de artefactos tecnológicos
									reutilizables.
								</p>
							</div>
							<div>
								<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
									Tecnologías Aplicadas
								</h3>
								<ul className='flex flex-wrap items-center justify-center space-x-4'>
									<li className='flex flex-col items-center'>
										<BiLogoJavascript size={35} className='text-yellow-500' />
										<span className='text-xs'>Javascript</span>
									</li>
									<li className='flex flex-col items-center'>
										<SiNextdotjs
											size={35}
											className='bg-white rounded-full text-slate-950'
										/>
										<span className='text-xs'>Next.js</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoRedux size={35} className='text-violet-600' />
										<span className='text-xs'>Redux</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoTailwindCss size={35} className='text-teal-400' />
										<span className='text-xs'>Tailwind</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiSolidFileCss size={35} className='text-gray-600' />
										<span className='text-xs'>CSS</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoMongodb size={35} className='text-green-700' />
										<span className='text-xs'>MongoDB</span>
									</li>
								</ul>
							</div>
						</figure>
					</div>
					<div className='flex items-center w-full justify-evenly'>
						<a
							href='https://re-store-six.vercel.app/'
							target='_blank'
							className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
						>
							<span>ReStore</span>
						</a>{' '}
						<a
							href='https://github.com/psamirt/ReStore'
							target='_blank'
							className='hover:translate-y-[0.7px] hover:text-gray-200'
						>
							<BiLogoGithub size={45} />
						</a>
					</div>
				</div>
				{/* Login Page */}
				<div className='flex flex-col items-center'>
					<div className='hover:scale-[1.02] ease-in duration-300 '>
						<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
							<div className='mb-4'>
								<img
									src='imagenes/sesion.png'
									alt='restore'
									className='h-auto mx-auto w-96'
								/>
							</div>
							<div className='mb-4'>
								<h1 className='text-xl font-bold text-center font-roboto'>
									Login Page
								</h1>
								<p className='italic text-center '>
									Pagina para poder iniciar sesión usando Api rest, guards y
									lazyload
								</p>
							</div>
							<div>
								<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
									Tecnologías Aplicadas
								</h3>
								<ul className='flex flex-wrap items-center justify-center space-x-4'>
									<li className='flex flex-col items-center'>
										<BiLogoAngular
											size={35}
											className='text-red-500 bg-white rounded-full'
										/>
										<span className='text-xs'>Angular</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiSolidFileCss size={35} className='text-gray-600' />
										<span className='text-xs'>CSS</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoHtml5
											size={35}
											className='text-orange-600 bg-white rounded-full'
										/>
										<span className='text-xs'>HTML5</span>
									</li>
								</ul>
							</div>
						</figure>
					</div>
					<div className='flex items-center w-full justify-evenly'>
						<a
							href='https://github.com/psamirt/proceso-seleccion'
							target='_blank'
							className='hover:translate-y-[0.7px] hover:text-gray-200'
						>
							<BiLogoGithub size={45} />
						</a>
					</div>
				</div>

				{/* Gestion Car */}
				<div className='flex flex-col items-center'>
					<div className='hover:scale-[1.02] ease-in duration-300 '>
						<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
							<div
								onClick={() => setSelectedId('gestionCar')}
								className='mb-4 cursor-pointer'
							>
								<video
									src='videos/gestionCarClip.mp4'
									autoPlay
									muted
									loop
									playsInline
									className='h-auto mx-auto w-96'
								/>
							</div>
							<div className='mb-4'>
								<h1 className='text-xl font-bold text-center font-roboto'>
									Gestion Car
								</h1>
								<p className='italic text-center '>
									Pagina dedicada a la gestión de clientes para talleres
									automotrices
								</p>
							</div>
							<div>
								<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
									Tecnologías Aplicadas
								</h3>
								<ul className='flex flex-wrap items-center justify-center space-x-4'>
									<li className='flex flex-col items-center'>
										<BiLogoReact size={35} className='text-blue-400' />
										<span className='text-xs'>React</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiSolidFileCss size={35} className='text-gray-600' />
										<span className='text-xs'>CSS</span>
									</li>
									<li className='flex flex-col items-center'>
										<SiSass
											size={35}
											className='text-red-600 bg-white rounded-full'
										/>
										<span className='text-xs'>SASS</span>
									</li>
									<li className='flex flex-col items-center'>
										<BiLogoBootstrap
											size={35}
											className='text-purple-600 rounded-full'
										/>
										<span className='text-xs'>Bootstrap</span>
									</li>
									<li className='flex flex-col items-center'>
										<SiReactquery
											size={35}
											className='text-orange-600 rounded-full'
										/>
										<span className='text-xs'>TanStack query</span>
									</li>
								</ul>
							</div>
						</figure>
					</div>
					<div className='flex items-center w-full justify-evenly'>
						<a
							href='https://github.com/psamirt/proceso-seleccion'
							target='_blank'
							className='hover:translate-y-[0.7px] hover:text-gray-200'
						>
							<BiLogoGithub size={45} />
						</a>
					</div>
				</div>
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
