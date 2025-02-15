import { useEffect, useState } from 'react';
// import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
// import ProductItem from '../components/ProductItem';
import Search from '../components/Search';
import { fetchData } from '../redux_store/slicer/productSlice';
import { AppDispatch, RootState } from '../redux_store/store';
import { ProductsT } from './Home';

const Test = () => {
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

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error..</div>;
	}

	const handleQueryChange = (query: string) => {
		setSearchQuery(query);
	};

	console.log(productData);

	return (
		<div className="mt-20">
			<Search onQueryChange={handleQueryChange} />
		</div>
	);
};

export default Test;
