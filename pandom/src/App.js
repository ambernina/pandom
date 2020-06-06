import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import AllLayout from "./components/AllLayout";

const App = () => {
	return (
		<Router>
				<AllLayout />
		</Router>
	);

}

export default App;
