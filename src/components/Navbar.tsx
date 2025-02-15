import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux_store/store';
export default function Navbar({
	onQueryChange,
}: {
	onQueryChange: (query: string) => void;
}) {
	const [searchQuery, setSearchQuery] = useState<string>('');
	// const [cartData, setCartData] =
	const cart = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		onQueryChange(searchQuery);
	}, [searchQuery, onQueryChange]);
	return (
		<>
			<header className="bg-slate-100 p-3 grid grid-cols-5  items-center gap-5 fixed left-0 right-0 top-[-1px]">
				<div className="md:text-2xl text-base font-bold text-teal-600 hover:opacity-80 transition-all">
					<Link to="/">Shopping Cart</Link>
				</div>
				<div className="col-span-3 grid relative">
					<input
						className="py-2 px-3 rounded-full"
						type="text"
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
						placeholder="Search product.."
					/>
					<span className="absolute right-2 top-1">
						<IoSearch size={30} />
					</span>
				</div>
				<nav className="flex items-center text-xs justify-end gap-4">
					<Link
						className="hover:bg-slate-200   flex flex-col items-center justify-center px-2 py-1 duration-200"
						to="/cart"
					>
						<span className="relative">
							{cart.length > 0 && (
								<span className="bg-red-400 px-[7px] py-[2px] rounded-full absolute right-[-7px] top-[-7px] text-xs text-white">
									{cart.length}
								</span>
							)}

							<AiOutlineShoppingCart size={30} />
						</span>
						<span className="text-sm">Cart</span>
					</Link>

					<Link
						to="/"
						className="hover:bg-slate-200 duration-200 md:flex hidden flex-col items-center justify-center px-1 py-1"
					>
						<FaRegHeart size={30} />
						<span className="text-sm">Favorites</span>
					</Link>
				</nav>
			</header>
		</>
	);
}
