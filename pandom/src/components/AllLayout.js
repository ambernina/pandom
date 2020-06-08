import React from "react";

// components
import BootstrapNavbar from "./Navbar";
import BootstrapJumbo from "./Jumbotron";
import Footer from "./Footer";
// import PageContent from "./PageContent";


const AllLayout = () => {
	return (
		<>
    <BootstrapNavbar/>
		<BootstrapJumbo />
		<Footer/>
		</>
	);
};

export default AllLayout;
