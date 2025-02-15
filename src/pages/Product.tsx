import ProductDetails from '../components/ProductDetails';

export default function Product() {
	return (
		<>
			<div className="grid place-content-center">
				<ProductDetails
					product={{
						id: 0,
						title: '',
						category: '',
						description: '',
						image: '',
						price: 0,
						rating: {
							count: 0,
							rate: 0,
						},
					}}
				/>
			</div>
		</>
	);
}
