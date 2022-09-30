import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="px-4 py-2 mt-5">
				<Jumbotron />
				<div className="row">
          			<div className="col-lg-3 col-md-4">
            			<Cards image="https://www.rwest.com/wp-content/uploads/2017/08/alan-king-380383-unsplash-uai-2880x4318-500x325.jpg"/>
          			</div>
		  			<div className="col-lg-3 col-md-4">
            			<Cards image="https://www.t-mobile.com/news/_admin/uploads/2015/03/Pets_Unleashed_8-500x325.jpg"/>
          			</div>
		  			<div className="col-lg-3 col-md-4">
            			<Cards image="https://faunalytics.org/wp-content/uploads/2015/02/2544273446_d0681a88d9_z-500x325.jpg"/>
          			</div>
		  			<div className="col-lg-3 col-md-4">
            			<Cards image="http://estacaoferiashotel.com.br/wp-content/uploads/2013/09/shutterstock_101513524-500x325.jpg" />
          			</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
