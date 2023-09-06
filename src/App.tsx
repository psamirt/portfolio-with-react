import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { Bars } from 'react-loader-spinner'

const App = (): JSX.Element => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 5000)
	}, [])

	return (
		<div>
			{loading ? (
				<div className='flex justify-center items-center h-screen'>
					<Bars
						height='80'
						width='80'
						ariaLabel='bars-loading'
						visible={true}
						color='#ffffff'
					/>
				</div>
			) : (
				<div className='relative'>
					<video
						autoPlay
						loop
						muted
						className='fixed w-full h-full object-cover z-[-1]'
					>
						<source src='background.mp4' type='video/mp4' />
					</video>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			)}
		</div>
	)
}

export default App
