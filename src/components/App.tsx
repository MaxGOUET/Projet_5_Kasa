import "../styles/Thumbnails_container.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Header.tsx";
import Accueil from "../pages/Accueil.tsx";
import Apropos from "../pages/Apropos.tsx";
import Logement from "../pages/Logement.tsx";
import ErrorPage from "../pages/404.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
