import React from "react";

import { Card, Container, Row, Col, Button } from "react-bootstrap";

export default function PortfolioCard(props) {
	return (
		<Col md={5}>
			<Card className="rounded-5">
				<Card.Img className="rounded-5 portfolioImg" variant="top" src={props.img} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<Card.Subtitle className="mb-2 text-muted">{props.tech}</Card.Subtitle>
					<Button variant="outline-secondary" href={props.liveLink} target="_blank">
						See Live
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}
