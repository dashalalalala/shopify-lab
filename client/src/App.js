import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
import PageFour from "./pages/PageFour/PageFour";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Learn />} />
						{/* <Route path="/quiz" element={<PageFour />} /> */}
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
