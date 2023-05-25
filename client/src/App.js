import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
import Form from "./components/form/Form";
import GuideData from "./components/guideData/GuideData";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Learn />} />
						<Route path="/guide" element={<Form />}>
							<Route path=":moduleId" element={<GuideData />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
