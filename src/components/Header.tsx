import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

const whatsapp = "[WHATSAPP]";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">C</span>
          <span>
            <strong>Cléverson</strong>
            <small>Consultor de Imóveis</small>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={close}>Início</NavLink>
          <NavLink to="/imoveis" onClick={close}>Imóveis</NavLink>
          <NavLink to="/imoveis?finalidade=compra" onClick={close}>Comprar</NavLink>
          <NavLink to="/imoveis?finalidade=aluguel" onClick={close}>Alugar</NavLink>
          <NavLink to="/sobre" onClick={close}>Sobre</NavLink>
          <NavLink to="/contato" onClick={close}>Contato</NavLink>
          <a className="nav-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> WhatsApp
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}