import React from "react";
import { Link } from "react-router-dom";
import {
	Nav,
	Navbar,
	NavDropdown,
	Button
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const BootstrapNavbar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/">
				pandom
			</Navbar.Brand>
			<Nav className="mr-auto">
				<NavDropdown title="EXPLORE" id="basic-nav-dropdown">
					<NavDropdown.Item as={Link} to="/latest">
						LATEST
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/trending">
						TRENDING
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/popular">
						POPULAR
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/category/breaking">
						BREAKING
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/category/mvteaser">
						MV/TEASER
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/category/drama">
						DRAMA
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/category/culture-and-society">
						CULTURE
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/category/exclusive">
						EXCLUSIVE
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/community">
						COMMUNITY
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/forums">
						FORUMS
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/apps">
						APPS
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/viki">
						VIKI
					</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link as={Link} to="/category/quiz">
					QUIZ
				</Nav.Link>
				<Nav.Link as={Link} to="/category/video">
					VIDEO
				</Nav.Link>
				<Nav.Link as={Link} to="/category/celeb">
					CELEB
				</Nav.Link>
				<Nav.Link as={Link} to="/category/style">
					STYLE
				</Nav.Link>
				<Nav.Link as={Link} to="/category/tvfilm">
					TV/FILM
				</Nav.Link>
				<Nav.Link as={Link} to="/category/music">
					MUSIC
				</Nav.Link>
				<Nav.Link as={Link} to="/category/features">
					FEATURES
				</Nav.Link>
			</Nav>
			<Button variant="primary" as={Link} to="/search">
				<Search />
			</Button>
		</Navbar>
	);
};

export default BootstrapNavbar;
