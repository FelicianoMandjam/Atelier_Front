import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/home/Home.tsx";
import AddFormulaire from "./pages/admin/AddFormulaire.tsx";
import Header from "./componants/layouts/user/Header.tsx";
import Footer from "./componants/layouts/user/Footer.tsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/formulaire" element={<AddFormulaire />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
