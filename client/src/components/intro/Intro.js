import Typist from "react-typist-component";

function Intro() {
	// const [formData, setFormData] = useContext(FormDataContext);

	return (
		<div>
			<Typist>
				<h1 className="title">Welcome to Shopify Interactive Learning Lab!</h1>{" "}
			</Typist>
      
			<p className="text">
				Shopify Interactive Learning Forum is the place where you can
				experiment, make mistakes, and learn in a risk-free, simulated
				environment. Whether you're new to the digital commerce world, planning
				to scale your existing venture, or seeking insights to optimize your
				operations, our forum provides you with the necessary tools and guidance
				to navigate the eCommerce landscape confidently.
			</p>
			<p className="text">
				{" "}
				Through practical scenarios, we'll help you learn about key aspects like
				effective cash flow management, comprehensive market research, building
				a robust online presence, delivering excellent customer service, and
				handling growth challenges. We're here to help turn your entrepreneurial
				vision into a successful reality.
			</p>
		</div>
	);
}

export default Intro;
