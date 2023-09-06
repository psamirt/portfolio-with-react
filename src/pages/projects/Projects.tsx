import {
	BiLogoTypescript,
	BiLogoReact,
	BiLogoTailwindCss,
	BiSolidFileCss,
} from 'react-icons/bi'

const Projects = (): JSX.Element => {
	return (
	  <div className='max-w-[1640px] mx-auto lg:flex-col flex  justify-between items-center p-4'>
		<figure className='rounded-lg shadow-lg p-6 w-[500px] mb-10'>
		  <div className='mb-4'>
			<img src='imagenes/algoGrill.png' alt='algogrill' className='w-96 h-auto mx-auto' />
		  </div>
		  <div className='mb-4'>
			<h1 className='text-xl font-bold font-special text-center'>Algo grill</h1>
			<p className=' text-center italic'>
			Aplicación dedicada la creación y búsqueda de descripción de videojuegos.
			</p>
		  </div>
		  <div>
			<h3 className='text-xl font-semibold mb-2 font-special text-center'>Tecnologías Aplicadas</h3>
			<ul className='flex items-center justify-center space-x-4'>
			  <li className='flex flex-col items-center'>
				<BiLogoTypescript size={50} className='text-blue-500' />
				<span>Typescript</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiLogoReact size={50} className='text-blue-400' />
				<span>React</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiLogoTailwindCss size={50} className='text-teal-400' />
				<span>Tailwind</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiSolidFileCss size={50} className='text-gray-600' />
				<span>CSS</span>
			  </li>
			</ul>
		  </div>
		</figure>
		<figure className='rounded-lg shadow-lg p-6 w-[500px] '>
		  <div className='mb-4'>
			<img src='imagenes/algoGrill.png' alt='algogrill' className='w-96 h-auto mx-auto' />
		  </div>
		  <div className='mb-4'>
			<h1 className='text-xl font-bold font-special text-center'>Algo grill</h1>
			<p className=' text-center italic'>
			E-commerce inspirada en venta de artefactos tecnológicos reutilizables.
			</p>
		  </div>
		  <div>
			<h3 className='text-xl font-semibold mb-2 font-special text-center'>Tecnologías Aplicadas</h3>
			<ul className='flex items-center justify-center space-x-4'>
			  <li className='flex flex-col items-center'>
				<BiLogoTypescript size={50} className='text-blue-500' />
				<span>Typescript</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiLogoReact size={50} className='text-blue-400' />
				<span>React</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiLogoTailwindCss size={50} className='text-teal-400' />
				<span>Tailwind</span>
			  </li>
			  <li className='flex flex-col items-center'>
				<BiSolidFileCss size={50} className='text-gray-600' />
				<span>CSS</span>
			  </li>
			</ul>
		  </div>
		</figure>
	  </div>
	);
  };

export default Projects
