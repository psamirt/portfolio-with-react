import { useState } from 'react'
import {
	FaGithub,
	FaLinkedin,
	FaWhatsapp,
	FaPlus,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

function SocialMedia() {
	const [open, setOpen] = useState(false)

	return (
		<div className='fixed bottom-6 right-6 flex flex-col items-center z-50'>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
				transition={{ duration: 0.3 }}
				className='flex flex-col items-center space-y-3 mb-4'
			>
				{open && (
					<>
						<a
							href='https://github.com/psamirt'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-gray-600 p-3 rounded-full text-white shadow-md'
						>
							<FaGithub size={20} />
						</a>
						<a
							href='http://api.whatsapp.com/send?phone=51982254431'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-500 p-3 rounded-full text-white shadow-md'
						>
							<FaWhatsapp size={20} />
						</a>
						<a
							href='https://www.linkedin.com/in/paolo-tello-7a1872285'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-blue-700 p-3 rounded-full text-white shadow-md'
						>
							<FaLinkedin size={20} />
						</a>
					</>
				)}
			</motion.div>

			{/* Botón principal */}
			<button
				onClick={() => setOpen(!open)}
				className='bg-gray-800 p-4 rounded-full text-white shadow-lg flex items-center justify-center transition-all transform hover:scale-110'
			>
				<FaPlus
					size={24}
					className={`transition-transform ${open ? 'rotate-45' : ''}`}
				/>
			</button>
		</div>
	)
}

export default SocialMedia
