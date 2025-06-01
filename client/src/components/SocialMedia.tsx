import { useState } from 'react'
import {
	FaGithub,
	FaLinkedin,
	FaWhatsapp,
	FaPlus,
	FaMoon,
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
						<motion.a
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.1 }}
							href='https://github.com/psamirt'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-gray-600 dark:bg-black p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform duration-200'
						>
							<FaGithub size={20} />
						</motion.a>
						<motion.a
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2 }}
							href='http://api.whatsapp.com/send?phone=51982254431'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-green-500 dark:bg-green-600 p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform duration-200'
						>
							<FaWhatsapp size={20} />
						</motion.a>
						<motion.a
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.3 }}
							href='https://www.linkedin.com/in/paolo-tello-7a1872285'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-blue-700 dark:bg-blue-800 p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform duration-200'
						>
							<FaLinkedin size={20} />
						</motion.a>
						<motion.button
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.4 }}
							className='bg-yellow-500 dark:bg-purple-600 p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform duration-200'
						>
							 <FaMoon size={20} />
						</motion.button>
					</>
				)}
			</motion.div>

			{/* Botón principal */}
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setOpen(!open)}
				className='bg-gray-800 dark:bg-black p-4 rounded-full text-white shadow-lg flex items-center justify-center transition-all'
			>
				<FaPlus
					size={24}
					className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
				/>
			</motion.button>
		</div>
	)
}

export default SocialMedia