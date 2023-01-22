import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import bootstrapSVG from "./assets/svg/getbootstrap.svg";
import cssSVG from "./assets/svg/css.svg";
import expressSVG from "./assets/svg/expressjs.svg";
import postmanSVG from "./assets/svg/getpostman.svg";
import gitSVG from "./assets/svg/git.svg";
import gitHubSVG from "./assets/svg/github.svg";
import jsSVG from "./assets/svg/js.svg";
import lessSVG from "./assets/svg/lesscss.svg";
import mongoSVG from "./assets/svg/mongodb.svg";
import postgressSVG from "./assets/svg/postgresql-ar21.svg";
import reactSVG from "./assets/svg/reactjs.svg";
import tailwindSVG from "./assets/svg/tailwindcss.svg";
import mysqlSVG from "./assets/svg/mysql.svg";
import npmSVG from "./assets/svg/npmjs.svg";
import nodeSVG from "./assets/svg/node.svg";

export default function Skills() {
	return (
		<div className="skills p-5 mt-3 mb-4 bg-light rounded-3">
			<Row>
				<Col md={5}>
					<h1 class="display-3 text-dark fw-bold text-start pb-3 pt-5">My Skills</h1>
					<h1 class="display-6 text-secondary fw-bold lh-1 mb-3">Workflow</h1>
					<ul class="text-start">
						<li>Mobile-First, Responsive Design</li>
						<li>Cross Browser Testing &amp; Debugging</li>
						<li>Cross Functional Teams</li>
						<li>Agile Development &amp; Scrum</li>
					</ul>
				</Col>
				<Col className="pt-5 border-4 row-gap-3 gap-3">
					<h1 class="display-6 text-secondary fw-bold lh-1 pb-5 text-start">Languages and Tech</h1>
					<img src={bootstrapSVG} alt="" />
					<img src={cssSVG}alt="" />
					<img src={expressSVG}alt="" />
					<img src={postmanSVG}alt="" />
					<img src={gitSVG}alt="" />
					<img src={gitHubSVG}alt="" />
					<img src={jsSVG}alt="" />
					<img src={lessSVG}alt="" />
					<img src={mongoSVG}alt="" />
					<img src={postgressSVG}alt="" />
					<img src={reactSVG}alt="" />
					<img src={tailwindSVG}alt="" />
					<img src={mysqlSVG}alt="" />
					<img src={npmSVG}alt="" />
					<img src={nodeSVG}alt="" />
				</Col>
			</Row>
		</div>
	);
}
