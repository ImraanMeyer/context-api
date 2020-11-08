import React, { useContext, useState, useEffect } from 'react';
import Movie from './Movie';
import { MovieContenxt } from './MovieContenxt';

const MovieList = () => {
	const {movies, setMovies} = useContext(MovieContenxt);

	return (
		<div>
			<pre>
				{JSON.stringify(movies, null, 2)
				//   movies.map(movie => (<Movie movie={movie} />))
				}
            </pre>
            
            <button onClick={() => setMovies([...movies, {name:"21 Jump St", price:400, id:122}])}>
                Add Movie
            </button>
		</div>
	);
};

export default MovieList;
