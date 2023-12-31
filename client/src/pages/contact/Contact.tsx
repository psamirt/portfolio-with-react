import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

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
			const response = await axios.post('https://mail-service-7vpk.onrender.com/send', formData)
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
		<div className='py-8 h-[100vh] flex'>
			<section className='max-w-2xl mx-auto my-auto p-6  bg-black bg-opacity-75 shadow-md rounded-lg'>
				<h3 className='text-2xl font-semibold text-center'>
					{' '}
					<span>Contactame</span>
				</h3>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label htmlFor='name' className='block'>
							Nombre
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full px-4 py-2 mt-2 border  border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
							style={{background:'rgba(0, 0, 0, 0.5)'}}
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='email' className='block text-white'>
							Correo electrónico
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full px-4 py-2 mt-2 border  border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
							style={{background:'rgba(0, 0, 0, 0.5)'}}
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='message' className='block'>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							cols={30}
							rows={6}
							className='w-full px-4 py-2 mt-2 border  border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500'
							style={{background:'rgba(0, 0, 0, 0.5)'}}
						></textarea>
					</div>
					<button
						type='submit'
						className={`w-full px-4 py-2 font-bold rounded-md focus:outline-none ${
							disable
								? 'bg-gray-300 cursor-not-allowed text-black'
								: 'bg-blue-500 hover:bg-blue-600 text-white'
						}`}
						disabled={disable}
					>
						Enviar
					</button>
				</form>
			</section>
		</div>
	)
}

export default Contact
