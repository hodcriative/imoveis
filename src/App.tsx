import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Imoveis from "./pages/Imoveis";
import ImovelDetalhes from "./pages/ImovelDetalhes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/imoveis/:id" element={<ImovelDetalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}