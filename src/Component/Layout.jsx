import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './include/Header';
import Footer from './include/Footer';
import './include/Header2.css';
import './include/Footer.css';
import Home from './pages/Home';
import About from './pages/ConferenceOverview';
import Registrationfee from './pages/Registration/Registrationfee';
import Callforpapers from './pages/Callforpapers';
import BecomeAsponsor from './pages/BecomeAsponsor';
import Whyexhibit from './pages/Exhibit/Whyexhibit';
import Awards from './pages/Awards/Awards';
import Venue from './pages/Venue';
import Contact from './pages/Contact/Contact';
import Partners from './pages/Partners/Partners';
import ProgramOverview from './pages/Programs/ProgramOverview';

import Products from './pages/Programs_demo/Products';

import ProductDetail from './pages/Programs_demo/ProductDetail';

import ProgramAdvisoryBoard from './pages/Program_advisory_board/ProgramAdvisoryBoard';

class Layout extends Component {

	render() {
		return (
			<div className="Layout_scn">

				<BrowserRouter>
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/About" element={<About />} />
						<Route exact path="/Callforpapers" element={<Callforpapers />} />
						<Route exact path="/Registration/Registrationfee" element={<Registrationfee />} />
						<Route exact path="/BecomeAsponsor" element={<BecomeAsponsor />} />
						<Route exact path='/Whyexhibit' element={<Whyexhibit />} ></Route>
						<Route exact path='/Awards' element={<Awards />} ></Route>
						<Route exact path='/Partners' element={<Partners />} ></Route>
						<Route path="/Venue" exact element={<Venue />}></Route>
						<Route path="/Contact" exact element={<Contact />}></Route>
						<Route path="/ProgramOverview" exact element={<ProgramOverview />}></Route>
						<Route path="/ProgramAdvisoryBoard" exact element={<ProgramAdvisoryBoard />}></Route>

						<Route path="/Products" exact element={<Products />}></Route>
						{/* <Route path="/Products/:productId" exact element={<ProductDetail />}></Route> */}
						<Route path="/ProductDetail" exact element={<ProductDetail />}></Route>
						


					</Routes>
					<Footer></Footer>
				</BrowserRouter>

			</div>
		)
	}
}


export default Layout;