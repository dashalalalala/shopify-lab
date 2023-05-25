import "./App.css";
import { ChakraProvider, ModalFocusScope } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
import Form from "./components/form/Form";
import GuideData from "./components/guideData/GuideData";
import StoreFront from "./components/storeFront/StoreFront";
import ModuleQuiz from "./components/moduleQuiz/ModuleQuiz";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<Learn />} />
						<Route path="/guide" element={<Form />}>
							<Route path=":moduleId" element={<GuideData />} />
							<Route path="module-quiz" element={<ModuleQuiz />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<StoreFront />
			</div>
		</ChakraProvider>
	);
}

export default App;
