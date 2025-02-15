import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Test from './pages/Test';

function App() {
	const [query, setQuery] = useState<string>('');
	const handleQueryChange = (query: string) => {
		setQuery(query);
	};
	return (
		<>
			<Navbar onQueryChange={handleQueryChange} />
			<Routes>
				{/* Route for home page */}
				<Route path="/" element={<Home query={query} />}></Route>
				{/* Route for product details page */}
				<Route path="/product/" element={<Product />}></Route>
				{/* Route for add to cart page */}
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/test" element={<Test />}></Route>
			</Routes>
		</>
	);
}

export default App;
