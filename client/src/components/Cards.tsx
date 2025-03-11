import * as Icons from 'react-icons/bi'
import { SiNextdotjs, SiSass, SiReactquery } from 'react-icons/si'

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
		<div className='flex flex-col items-center card'>
			<div className='hover:scale-[1.02] ease-in duration-300 '>
				<figure className='rounded-lg shadow-lg p-6 w-[300px] h-[510px] bg-black bg-opacity-75 m-6 ring-4 ring-white'>
					<div className='mb-4'>
						{image.endsWith('.mp4') ? (
							<video
								src={image}
								autoPlay
								muted
								loop
								playsInline
								className='h-auto mx-auto w-96'
							/>
						) : (
							<img src={image} alt={title} className='h-auto mx-auto w-96' />
						)}
					</div>
					<div className='mb-4'>
						<h1 className='text-xl font-bold text-center font-roboto'>
							{title}
						</h1>
						<p className='italic text-center '>{description}</p>
					</div>
					<div>
						<h3 className='mb-2 text-xl font-semibold text-center font-roboto'>
							Tecnologías Aplicadas
						</h3>
						<ul className='flex flex-wrap items-center justify-center space-x-4'>
							{technologies.map((tech, index) => {
								const IconComponent = iconMap[tech.icon as keyof typeof iconMap]
								return (
									<li key={index} className='flex flex-col items-center'>
										<IconComponent
											size={tech.size}
											className={tech.className}
										/>
										<span className='text-xs'>{tech.name}</span>
									</li>
								)
							})}
						</ul>
					</div>
				</figure>
			</div>
			<div className='flex items-center w-full justify-evenly'>
				<a
					href={link}
					target='_blank'
					className=' bg-white rounded-full text-black font-bold p-2 hover:translate-y-[0.7px] hover:bg-slate-200'
				>
					<span>{linkText}</span>
				</a>
				<a
					href={github}
					target='_blank'
					className='hover:translate-y-[0.7px] hover:text-gray-200'
				>
					<Icons.BiLogoGithub size={45} />
				</a>
			</div>
		</div>
	)
}

export default Cards
