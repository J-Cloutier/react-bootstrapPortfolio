import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Topbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
			<Container>
				<Navbar.Brand href="#home">Jordan Cloutier</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#features">Portfolio</Nav.Link>
						<Nav.Link href="#pricing">Skills</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Services</Nav.Link>
						<Nav.Link href="#deets">Hire Me</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
