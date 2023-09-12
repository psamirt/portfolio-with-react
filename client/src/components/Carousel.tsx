import React, { useState, } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Carousel: React.FC = () => {
	const slides =  [
		{ url: 'imagenes/algoGrill.png' },
		{ url: 'imagenes/algoGrillResponsive.png' },
		{ url: 'imagenes/gzForm.png' },
		{ url: 'imagenes/homePageGZ.png' },
		{ url: 'imagenes/restore.png' },
		{ url: 'imagenes/restoreDetail.png' },
		{ url: 'imagenes/restoreDetail2.png' },
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = (): void => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	const nextSlide = (): void => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: number): void => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className='max-w-[850px] h-[350px] w-[450px] flex-col lg:flex-col lg:h-[550px] lg:w-[550px] mx-auto py-16 px-4 relative group'>
			<img
				src={slides[currentIndex].url}
				alt={`Slide ${currentIndex}`}
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
				loading='lazy' // Aplicar lazy loading aquí
			/>
			{/* flecha izquierda */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* flecha derecha */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((_slide, slideIndex) => (
					<div
						className='text-2xl cursor-pointer text-white'
						key={slideIndex}
						onClick={(): void => {
							goToSlide(slideIndex)
						}}
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
