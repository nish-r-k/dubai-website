import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import TheMission from "./pages/TheMission";
import ContactUs from "./pages/ContactUs";
import LiveLedgerFooter from "./components/LiveLedgerFooter";
import Career from "./pages/Career";
import Impact from "./pages/Impact";
import DigitalGarden from "./pages/DigitalGarden";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import CareerDetails from "./components/CareerDetails";
import Chat from "./components/Chat"
const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<TheMission />}></Route>
				<Route path="/services" element={<Services />}></Route>
				<Route path="/contact" element={<ContactUs />}></Route>
				<Route path="/careers" element={<Career />}></Route>
				<Route path="/careers/:title" element={<CareerDetails />} />
				<Route path="/impact" element={<Impact />}></Route>
				<Route path="/digital-garden" element={<DigitalGarden />}></Route>
			</Routes>
			{/* <Chatbot/> */}
			<Chat/>
			
			<LiveLedgerFooter />
		</BrowserRouter>
	);
};

export default App;
