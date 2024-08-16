import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductItem from '../components/ProductItem';

type RatingT = {
	count: number;
	rate: number;
};
export type ProductsT = {
	id: number;
	title: string;
	category: string;
	description: string;
	image: string;
	price: number;
	rating: RatingT;
};
export default function Home() {
	const [products, setProducts] = useState<ProductsT[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	async function fetchAllProducts() {
		setLoading(true);
		try {
			const response = await fetch(`https://fakestoreapi.com/products`);
			if (response.ok) {
				const data = await response.json();
				setProducts(data);
				setLoading(false);
			} else {
				setError(
					'404: Cannot fetch data on the server. Please try again later.'
				);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return (
		<>
			<div className="flex items-center justify-center min-h-screen container mx-auto pt-20">
				<div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4">
					{error ? (
						<div>{error}</div>
					) : loading ? (
						<Circles
							height={'120'}
							width={'120'}
							color="black"
							visible={true}
						/>
					) : (
						products.map((product) => (
							<ProductItem key={product.id} product={product} />
						))
					)}
				</div>
			</div>
		</>
	);
}
