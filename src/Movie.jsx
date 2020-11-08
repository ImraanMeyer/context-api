import React, { useCallback, useContext } from 'react';
import { MovieContenxt } from './MovieContenxt';

const Movie = () => {
	const { movies } = useContext(MovieContenxt);

	return (
		<div>
			<pre>{JSON.stringify(movies, null, 2)}</pre>
		</div>
	);
};

export default Movie;
