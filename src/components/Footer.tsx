import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">C</span>
            <span><strong>Cléverson</strong><small>Consultor de Imóveis</small></span>
          </div>
          <p className="footer-copy">Atendimento próximo, transparente e focado em encontrar o imóvel que combina com o seu momento.</p>
        </div>

        <div>
          <h4>Navegação</h4>
          <Link to="/imoveis">Imóveis</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div>
          <h4>Contato</h4>
          <span><MapPin size={16}/> Colatina – ES</span>
          <span><Phone size={16}/> [TELEFONE]</span>
          <span><Mail size={16}/> [EMAIL]</span>
          <span><Instagram size={16}/> [INSTAGRAM]</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} Cléverson Consultor de Imóveis. Demonstração.</div>
      </div>
    </footer>
  );
}