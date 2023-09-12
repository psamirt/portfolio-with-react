import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/projects/Projects'
import Navbar from './components/Navbar'
import Contact from './pages/contact/Contact'
import Background from './components/Background'
import Footer from './components/Footer'

const App = (): JSX.Element => {
	return (
		<div>
			<Navbar />
			<Background />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		<Footer/>
		</div>
	)
}

export default App
