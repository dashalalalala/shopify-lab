import "./StoreFront.scss";
import store from "../../assets/images/Store-View-Mockup.jpg";
import store2 from "../../assets/images/store-view-mockup-2.jpg";
import store3 from "../../assets/images/store-front.jpeg";
import shopifyLogo from "../../assets/logos/shopify-logo-2018.svg";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormContext";

function StoreFront() {
	const [formData] = useContext(FormDataContext);

	return (
		<div className="wrapper">
			<div className="placeholder">
				<img
					className="placeholder__logo"
					src={formData.logo || shopifyLogo}
					alt="shopify logo"
				></img>
			</div>
		</div>
	);
}

export default StoreFront;
