import { SocialIcon } from "react-social-icons";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function Foot() {
	return (
		<footer class="p-5 mb-4 bg-light rounded-3">
			<Row>
				<Col md={8}>
					<div class="container-fluid py-5">
						<h1 class="display-5 fw-bold">Get In touch </h1>
						<h1 class="display-3 text-light fw-bold">Lets Work together</h1>
					</div>

					<SocialIcon className="m-1 zoom" fgColor="#ffffff" title="twitter" url="https://twitter.com/thejordn" />
					<SocialIcon className="m-1 zoom" fgColor="#ffffff" title="LinkedIn" url="https://www.linkedin.com/in/jordan-cloutier-36357479/" />
					<SocialIcon className="m-1 zoom" fgColor="#ffffff" title="GitHub" url="https://github.com/J-Cloutier" />
				</Col>
				<Col>
					<Form>
						<Form.Group className="mb-3 text-light" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3 text-light fs-4" controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Name" />
						</Form.Group>
						<Form.Group className="mb-3 text-light fs-4" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</footer>
	);
}
