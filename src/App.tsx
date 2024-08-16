import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				{/* Route for home page */}
				<Route path="/" element={<Home />}></Route>
				{/* Route for product details page */}
				<Route path="/product/" element={<Product />}></Route>
				{/* Route for add to cart page */}
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</>
	);
}

export default App;
