import "./StoreFront.scss";
import store from "../../assets/images/Store-View-Mockup.jpg";
import store2 from "../../assets/images/store-view-mockup-2.jpg";
import store3 from "../../assets/images/store-front.jpeg";
import shopifyLogo from "../../assets/logos/shopify-logo-2018.svg";

function StoreFront() {
	return (
		<div className="wrapper">
			<div className="placeholder">
				<img
					className="placeholder__logo"
					src={shopifyLogo}
					alt="shopify logo"
				></img>
			</div>
			{/* <img className="store-front" src={store3} alt=""></img> */}
		</div>
	);
}

export default StoreFront;
