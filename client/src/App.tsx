import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
// import Navbar from './components/Navbar'
import Contact from './pages/contact/Contact'
import SocialMedia from './components/SocialMedia'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = (): JSX.Element => {
	useEffect(() => {
		ScrollSmoother.create({
			wrapper: '#smooth-wrapper',
			content: '#smooth-content',
			smooth: 2,
			effects: true,
		})
	}, [])
	return (
		<div className='min-h-screen'>
			<SocialMedia />
			{/* <Navbar /> */}
			{/* <Background /> */}
			<div id='smooth-wrapper'>
				<main id='smooth-content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default App
