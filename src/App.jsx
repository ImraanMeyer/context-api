import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { MovieProvider } from './MovieContenxt';
import MovieList from './MovieList';
import Movie from './Movie';

const App = () => {
	return (
		<Router>
			<nav>
				<li>
					<Link to="/pageOne">Page One</Link>
				</li>
				<li>
					<Link to="/pageTwo">Page Two</Link>
				</li>
			</nav>

            <MovieProvider>
                <Route path="/pageOne" component={MovieList} />
                <Route path="/pageTwo" component={Movie} />
			</MovieProvider>
		</Router>
	);
};

export default App;
