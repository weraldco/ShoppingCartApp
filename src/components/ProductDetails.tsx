import { useDispatch, useSelector } from 'react-redux';
import { ProductsT } from '../pages/Home';
import { removeCart } from '../redux_store/slicer/cartSlice';
import { RootState } from '../redux_store/store';

type ProductDetailsProps = {
	product: ProductsT;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
	const cart = useSelector((state: RootState) => state.cart);

	const { image, title, price } = product;
	const dispatch = useDispatch();
	function handleRemove() {
		const index = cart.findIndex((c) => c === product);
		dispatch(removeCart(index));
	}
	return (
		<>
			<section className="grid grid-cols-9 w-full justify-evenly items-center gap-5 bg-slate-50 p-4 rounded-xl">
				<span>1</span>
				<span>x</span>
				<div className=" col-span-1 w-12">
					<div className="">
						<img src={image} alt="" className="" />
					</div>
				</div>
				<div className="col-span-4 w-56 text-left grid gap-2">
					<span className="text-sm text-gray-600">{title}</span>
					<span>$ {price}</span>
				</div>
				<div className="col-span-2">
					<button
						onClick={handleRemove}
						className="bg-gray-800 text-gray-200 rounded-full px-3 py-2 text-sm hover:bg-gray-600 active:bg-gray-800 transition-all"
					>
						Remove to cart
					</button>
				</div>
			</section>
		</>
	);
}
