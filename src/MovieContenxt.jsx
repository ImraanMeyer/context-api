import React, { useState, createContext, useMemo } from 'react';

export const MovieContenxt = createContext();

export const MovieProvider = props => {
	const [ movies, setMovies ] = useState([
		{
			name: 'Inception',
			price: 400,
			id: 4221
		},
		{
			name: 'Spider-MAn',
			price: 350,
			id: 3550
		},
		{
			name: 'Dr. Strange',
			price: 600,
			id: 2141
		}
    ]);

    const providerValue = useMemo(() => ({movies, setMovies}), [movies, setMovies]);

	return(
        <MovieContenxt.Provider value={providerValue}>
            {props.children}
        </MovieContenxt.Provider>
    );
};
