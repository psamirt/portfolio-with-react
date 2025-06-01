import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Button } from '@material-tailwind/react'
import { motion } from 'framer-motion'

const Contact = (): JSX.Element => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [disable, setDisable] = useState(true)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
		setDisable(
			formData.name === '' || formData.email === '' || formData.message === '',
		)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'https://mail-service-7vpk.onrender.com/send',
				formData,
			)
			console.log('Respuesta del servidor', response.data)
			Swal.fire({
				title: 'Gracias',
				text: 'Me comunicare a tu correo cuando lea el mensaje',
				icon: 'success',
				confirmButtonText: 'Aceptar',
			})
		} catch (error) {
			console.error('Error al enviar el formulario', error)
			Swal.fire({
				title: 'Error con el servidor',
				text: 'Puedes enviarme un correo a p_samir@hotmail.com',
				icon: 'error',
				confirmButtonText: 'Aceptar',
			})
		}
	}

	return (
		<div className='py-8 h-[100vh] flex items-center justify-center'>
			<motion.section 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='max-w-2xl w-full mx-auto p-8 bg-zinc-900/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-zinc-800'
			>
				<h3 className='text-3xl font-bold text-center mb-8 text-white'>
					<span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
						Contáctame
					</span>
				</h3>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-2'>
						<label htmlFor='name' className='block text-sm font-medium text-gray-300'>
							Nombre
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400'
							placeholder='Tu nombre'
						/>
					</div>
					<div className='space-y-2'>
						<label htmlFor='email' className='block text-sm font-medium text-gray-300'>
							Correo electrónico
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400'
							placeholder='tu@email.com'
						/>
					</div>
					<div className='space-y-2'>
						<label htmlFor='message' className='block text-sm font-medium text-gray-300'>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							rows={6}
							className='w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none'
							placeholder='Escribe tu mensaje aquí...'
						></textarea>
					</div>
					<Button
						type='submit'
						className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
							disable
								? 'bg-zinc-700 cursor-not-allowed text-zinc-400'
								: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-[1.02]'
						}`}
						disabled={disable}
					>
						Enviar Mensaje
					</Button>
				</form>
			</motion.section>
		</div>
	)
}

export default Contact
