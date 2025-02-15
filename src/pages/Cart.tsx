import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import { RootState } from '../redux_store/store';

export default function Cart() {
	const [totalAmount, setTotalAmount] = useState(0);
	const cart = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		setTotalAmount(cart.reduce((total, curr) => total + curr.price, 0));
	}, [cart]);
	return (
		<>
			<div className="pt-32 grid p-10">
				{cart && cart.length > 0 ? (
					<div className="grid text-center gap-5">
						{cart.map((product) => (
							<ProductDetails key={product.id} product={product} />
						))}
						<div className="grid grid-cols-2 w-80 items-center place-self-end">
							<div>
								<span className="italic">Total:</span>
								<span className="font-bold text-lg">
									$ {totalAmount.toFixed(2)}
								</span>
							</div>
							<div>
								<button className="p-2 rounded-full border-2 px-5 hover:bg-gray-200">
									Checkout
								</button>
							</div>
						</div>
					</div>
				) : (
					<div>Your cart is empty</div>
				)}
			</div>
		</>
	);
}
