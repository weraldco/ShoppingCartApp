import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { fetchData } from '../redux_store/slicer/productSlice';
import { AppDispatch, RootState } from '../redux_store/store';

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
export default function Home({ query }: { query: string }) {
	const dispatch = useDispatch<AppDispatch>();
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { data, loading, error } = useSelector(
		(state: RootState) => state.product
	);
	const [productData, setProductData] = useState<ProductsT[]>([]);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);
	useEffect(() => {
		setSearchQuery(query);
	}, [query]);
	useEffect(() => {
		if (searchQuery) {
			setProductData(
				data.filter((d) => {
					return d.title
						.toLocaleLowerCase()
						.includes(searchQuery.toLocaleLowerCase());
				})
			);
		} else {
			setProductData(data);
		}
	}, [data, searchQuery]);
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen container mx-auto pt-20">
				{error ? (
					<div>{error}</div>
				) : loading ? (
					<div className=" flex w-full items-center justify-center ">
						<Circles
							height={'120'}
							width={'120'}
							color="black"
							visible={true}
						/>
					</div>
				) : (
					<div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 ">
						{productData.map((product) => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
