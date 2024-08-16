import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<header className="bg-slate-100 p-3 grid grid-cols-5  items-center gap-5 fixed left-0 right-0 top-0">
				<div className="text-xl font-bold hover:text-slate-500 transition-all">
					<Link to="/">Shopping Cart</Link>
				</div>
				<div className="col-span-3 grid">
					<input
						className="py-2 px-3 rounded-full"
						type="text"
						placeholder="Search product.."
					/>
				</div>
				<nav>
					<ul className="grid place-content-end grid-cols-2 ">
						<li>
							<Link
								className="hover:bg-slate-300 p-3 rounded-full transition-all"
								to="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="hover:bg-slate-300 p-3 rounded-full transition-all"
								to="/cart"
							>
								Cart
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
