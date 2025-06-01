import * as Icons from 'react-icons/bi'
import { SiNextdotjs, SiSass, SiReactquery, SiExpress } from 'react-icons/si'

interface CardProps {
	title: string
	description: string
	link: string
	linkText: string
	technologies: Technology[]
	github: string
	image: string
}

interface Technology {
	name: string
	icon: string
	size: number
	className: string
}

const iconMap = {
	BiLogoTypescript: Icons.BiLogoTypescript,
	BiLogoReact: Icons.BiLogoReact,
	BiLogoTailwindCss: Icons.BiLogoTailwindCss,
	BiSolidFileCss: Icons.BiSolidFileCss,
	BiLogoJavascript: Icons.BiLogoJavascript,
	BiLogoRedux: Icons.BiLogoRedux,
	BiLogoPostgresql: Icons.BiLogoPostgresql,
	BiLogoMongodb: Icons.BiLogoMongodb,
	BiLogoGithub: Icons.BiLogoGithub,
	BiLogoAngular: Icons.BiLogoAngular,
	BiLogoHtml5: Icons.BiLogoHtml5,
	BiLogoBootstrap: Icons.BiLogoBootstrap,
	SiNextdotjs: SiNextdotjs,
	SiSass: SiSass,
	SiReactquery: SiReactquery,
	SiExpress: SiExpress,
	BiLogoNodejs: Icons.BiLogoNodejs,
}

const Cards = ({
	image,
	title,
	description,
	link,
	linkText,
	technologies,
	github,
}: CardProps): JSX.Element => {
	return (
		<div className='flex flex-col items-center bg-zinc-950 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300'>
			<div className='w-full overflow-hidden rounded-lg mb-4'>
				{image.endsWith('.mp4') ? (
					<video
						src={image}
						autoPlay
						muted
						loop
						playsInline
						className='w-full h-48 md:h-56 lg:h-64 object-cover'
					/>
				) : (
					<img
						src={image}
						alt={title}
						className='w-full h-48 md:h-56 lg:h-64 object-cover'
					/>
				)}
			</div>

			<div className='w-full space-y-3'>
				<h1 className='text-lg md:text-xl font-bold text-center font-roboto'>
					{title}
				</h1>
				<p className='text-sm md:text-base text-gray-300 text-center line-clamp-2'>
					{description}
				</p>

				<div className='py-2'>
					<h3 className='text-sm md:text-base font-semibold text-center font-roboto mb-2'>
						Tecnologías
					</h3>
					<ul className='flex flex-wrap items-center justify-center gap-3'>
						{technologies.map((tech, index) => {
							const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
							return (
								<li key={index} className='flex flex-col items-center'>
									<IconComponent size={tech.size} className={tech.className} />
									<span className='text-xs md:text-sm mt-1'>{tech.name}</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div className='flex items-center justify-center gap-4 pt-2'>
					<a
						href={link}
						target='_blank'
						className='bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200'
					>
						{linkText}
					</a>
					<a
						href={github}
						target='_blank'
						className='text-white hover:text-gray-300 transition-colors duration-200'
					>
						<Icons.BiLogoGithub size={24} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Cards
