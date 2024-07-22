import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { Routes } from "./app/routing/Routes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes></Routes>
			</BrowserRouter>
		</>
	)
};

export default App;
