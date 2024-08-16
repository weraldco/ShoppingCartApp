import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductsT } from '../pages/Home';
import { addToCart } from '../redux_store/slicer/cartSlice';

type ProductItemProps = {
	key: number;
	product: ProductsT;
};

export default function ProductItem({ product }: ProductItemProps) {
	const { image, title, price } = product;
	const dispatch = useDispatch();

	function handleAddToCart() {
		dispatch(addToCart(product));
	}
	return (
		<>
			<article className="p-5 flex flex-col">
				<div className="max-h-60 min-h-60">
					<img src={image} alt="" className="object-contain w-full h-full " />
				</div>
				<div className="grid gap-2 p-4 rounded-b-rg rounded-b-lg shadow-lg min-h-60">
					<h2 className=" font-bold">
						<Link to="/product">{title}</Link>
					</h2>
					<div className="grid grid-cols-2 mt-5 items-center ">
						<div className="">$ {price}</div>{' '}
						<button
							onClick={handleAddToCart}
							className="p-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 transition-all text-white rounded-lg"
						>
							Add to cart
						</button>
					</div>
				</div>
			</article>
		</>
	);
}
