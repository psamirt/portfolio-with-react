import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'

const App = (): JSX.Element => {
	return (
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
	)
}

export default App
