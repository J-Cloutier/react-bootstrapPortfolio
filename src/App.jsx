import React from "react";
import Topbar from "./TopBar";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Foot from "./Foot";

function App() {
	return (
		<div className="App">
			<Topbar />
			<Hero />
			<Services />
			{/* <h1>Hey Sailor</h1> */}
			<Portfolio />
			<Skills />
			<Foot />
		</div>
	);
}

export default App;
