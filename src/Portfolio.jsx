import React from "react";
import { Container, Row } from "react-bootstrap";
import PortfolioCard from "./PortfolioCard";
import data from "./assets/data";



export default function Portfolio() {
	const cards = data.map((item) => {
        return <PortfolioCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            tech={item.tech}
            liveLink={item.liveLink}
        />;
    });
    

    return (
		<Container className="portfolio">
			<h1 class="display-3 text-dark p-5 fw-bold">Some of My Recent Work</h1>

			<Row className="cards-list gap-3 justify-content-center">{cards}</Row>
		</Container>
	);
}
