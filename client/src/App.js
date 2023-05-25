import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
import Guide from './components/Guide/Guide'
import PageFour from "./components/PageFour/PageFour";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Learn />} />
						<Route path="/:id" element={<Guide />} />
						<Route path="/quiz" element={<PageFour />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
