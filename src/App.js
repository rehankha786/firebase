import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editform from "./EditForm/Editform";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/edit" element={<Editform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
