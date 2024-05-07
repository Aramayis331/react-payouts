import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';

const Routers = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default Routers;
