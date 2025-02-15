import {
	MdOutlineStar,
	MdOutlineStarBorder,
	MdOutlineStarHalf,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductsT } from '../pages/Home';
import { addToCart } from '../redux_store/slicer/cartSlice';
type ProductItemProps = {
	key: number;
	product: ProductsT;
};

export default function ProductItem({ product }: ProductItemProps) {
	const { image, title, price, rating } = product;
	const dispatch = useDispatch();

	function handleAddToCart() {
		dispatch(addToCart(product));
	}

	return (
		<article className="p-5 flex flex-col">
			<div className="max-h-60 min-h-60 px-10">
				<img src={image} alt="" className="object-contain w-full h-full " />
			</div>
			<div className="grid gap-2 p-4 rounded-b-rg rounded-b-lg shadow-lg min-h-60">
				<h2 className=" font-bold">
					<Link to="/product">{title}</Link>
				</h2>
				<div className="flex flex-col mt-5 items-center gap-1">
					<div className="text-2xl">$ {price.toFixed(2)}</div>
					<div className="flex flex-row items-center">
						<div className=" flex flex-row text-green-600">
							{Array.from({ length: Math.floor(rating.rate) }).map(
								(_, index) => (
									<MdOutlineStar size={20} key={index} />
								)
							)}
							{rating.rate % 1 != 0 && <MdOutlineStarHalf size={20} />}
							{Array.from({ length: Math.abs(Math.ceil(rating.rate) - 5) }).map(
								(_, index) => (
									<MdOutlineStarBorder size={20} key={index} />
								)
							)}
						</div>
						<div className="text-sm">({rating.count})</div>
					</div>
					<button
						onClick={handleAddToCart}
						className="p-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 transition-all text-white rounded-full w-full"
					>
						Add to cart
					</button>
				</div>
			</div>
			{/* <article className="p-5 flex flex-col">
				<div className="max-h-60 min-h-60 bg-white">
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
			</article> */}
		</article>
	);
}
