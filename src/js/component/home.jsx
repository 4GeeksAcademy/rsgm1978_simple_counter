import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SimpleCounter } from "./simpleCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<SimpleCounter/>
			<p>
				<img src={rigoImage} />
			</p>
			
			<p>
				{/*Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!*/}
			</p>
		</div>
	);
};

export default Home;
