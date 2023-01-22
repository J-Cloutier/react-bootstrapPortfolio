import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Services() {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				{/* <h1 class="display-5 fw-bold">Jordan Cloutier</h1> */}
				<h1 className="display-3 text-secondary fw-bold text-end pb-5">My Services</h1>
				<Row>
					<Col md={6}>
						<p className="fs-4">I dedicate myself to presenting my clients with completed projects that not only meet, but exceed, their initial vision. Knowing what to expect when we work together is critical - here is how I deliver success:</p>
					</Col>
					<Col md={6} className="fs-6">
						<ol>
							<li>
								<strong>Consultation</strong> - It all begins with a conversation where we'll pinpoint what this project is all about.
							</li>
							<li>
								<strong>Proposal</strong> - A detailed project proposal including a visual preview will be presented and a plan of action will be decided.
							</li>
							<li>
								<strong>Creation</strong> - Clients receive regular updates regarding their project status while I create and test it.
							</li>
							<li>
								<strong>Launch &amp; Support</strong> - Peace of mind is delivered with the final project in the form of available ongoing support.
							</li>
						</ol>
					</Col>
				</Row>
			</div>
		</div>
	);
}
