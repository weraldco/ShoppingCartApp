import { useEffect, useState } from 'react';

const Search = ({
	onQueryChange,
}: {
	onQueryChange: (query: string) => void;
}) => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		onQueryChange(searchQuery);
	}, [searchQuery, onQueryChange]);
	return (
		<input
			className="py-2 px-3 rounded-full"
			type="text"
			value={searchQuery}
			onChange={(e) => {
				setSearchQuery(e.target.value);
			}}
			placeholder="Search product.."
		/>
	);
};

export default Search;
