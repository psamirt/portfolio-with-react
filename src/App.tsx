import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'



const App = (): JSX.Element => {

	
	return (
		<div>
			<Navbar/>
			<Routes>
			<Route path='/' element= {<Home />} />
			</Routes>
		</div>
	)
}

export default App
