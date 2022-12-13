import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentLoader, ContentViewer } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentLoader />}></Route>
        <Route path="/pdfViewer/:task_uuid" element={<ContentViewer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
