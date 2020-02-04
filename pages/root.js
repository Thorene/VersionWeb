import Contact from "../pages/contact.js"; 
import HomePage from "../pages/HomePage.js"; 
const VISIT="VISIT";
const CONNECTED="CONNECTED";
const ALL="ALL";
const PAY="PAY";

var indexRoutes=[
	{path:"/contact",name:"Contact",component:Contact,display:VISIT},
	{path:"/",name:"HomePage",component:HomePage,display:ALL}
	 
];

export default indexRoutes;