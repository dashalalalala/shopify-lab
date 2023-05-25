import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route
							path="/user/bde3782d-b441-4e63-b0ae-66e7a6e4a882"
							element={<Learn />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</ChakraProvider>
	);
}

export default App;
