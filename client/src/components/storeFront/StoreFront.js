import "./StoreFront.scss";
import shopifyLogo from "../../assets/logos/shopify-logo-2018.svg";
import { useContext } from "react";
import { FormDataContext } from "../../context/FormContext";

function StoreFront() {
	// const [formData] = useContext(FormDataContext);

	return (
		<div className="wrapper">
			<div className="placeholder">
				<img
					className="placeholder__logo"
					src={shopifyLogo}
					alt="shopify logo"
				></img>
			</div>
		</div>
	);
}

export default StoreFront;
