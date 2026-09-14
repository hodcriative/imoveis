import { useState } from "react";
import { ArrowLeft, Bath, BedDouble, CarFront, Check, ChevronLeft, ChevronRight, MapPin, Maximize, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { imoveis, formatPrice } from "../data/imoveis";

export default function ImovelDetalhes() {
  const { id } = useParams();
  const imovel = imoveis.find(i => i.id === id);
  const [active, setActive] = useState(0);

  if (!imovel) return <div className="container not-found"><h1>Imóvel não encontrado.</h1><Link to="/imoveis" className="btn btn-dark">Voltar ao catálogo</Link></div>;

  const next = () => setActive((active + 1) % imovel.imagens.length);
  const prev = () => setActive((active - 1 + imovel.imagens.length) % imovel.imagens.length);
  const message = encodeURIComponent(`Olá, Cléverson! Tenho interesse no imóvel "${imovel.titulo}". Gostaria de receber mais informações.`);

  return (
    <div className="detail-page">
      <div className="container detail-back"><Link to="/imoveis"><ArrowLeft size={17}/> Voltar para imóveis</Link></div>
      <section className="container detail-gallery">
        <div className="gallery-main">
          <img src={imovel.imagens[active]} alt={imovel.titulo}/>
          {imovel.imagens.length > 1 && <>
            <button onClick={prev} className="gallery-arrow left"><ChevronLeft/></button>
            <button onClick={next} className="gallery-arrow right"><ChevronRight/></button>
          </>}
          <span className={`property-badge ${imovel.finalidade}`}>{imovel.finalidade === "compra" ? "À venda" : "Para alugar"}</span>
        </div>
        <div className="gallery-thumbs">{imovel.imagens.map((img, i) => <button key={img} className={active === i ? "active" : ""} onClick={() => setActive(i)}><img src={img} alt=""/></button>)}</div>
      </section>

      <section className="container detail-grid">
        <div>
          <span className="property-type">{imovel.tipo}</span>
          <h1>{imovel.titulo}</h1>
          <p className="detail-location"><MapPin size={18}/> {imovel.bairro}, {imovel.cidade}</p>
          <div className="detail-price">{formatPrice(imovel.preco, imovel.finalidade)}</div>

          <div className="detail-stats">
            <span><Maximize/><b>{imovel.area} m²</b><small>Área</small></span>
            {imovel.quartos > 0 && <span><BedDouble/><b>{imovel.quartos}</b><small>Quartos</small></span>}
            {imovel.suites > 0 && <span><BedDouble/><b>{imovel.suites}</b><small>Suítes</small></span>}
            {imovel.banheiros > 0 && <span><Bath/><b>{imovel.banheiros}</b><small>Banheiros</small></span>}
            {imovel.vagas > 0 && <span><CarFront/><b>{imovel.vagas}</b><small>Vagas</small></span>}
          </div>

          <div className="detail-description"><h2>Sobre o imóvel</h2><p>{imovel.descricao}</p></div>
          <div className="detail-description"><h2>Características</h2><div className="features-list">{imovel.caracteristicas.map(c => <span key={c}><Check size={16}/>{c}</span>)}</div></div>
        </div>

        <aside className="contact-card">
          <span className="eyebrow">Gostou deste imóvel?</span>
          <h2>Vamos conversar.</h2>
          <p>Fale comigo pelo WhatsApp e tire suas dúvidas sobre este imóvel.</p>
          <a className="btn btn-whatsapp" href={`https://wa.me/[WHATSAPP]?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle/> Tenho interesse</a>
          <span className="contact-card-note">Atendimento personalizado em Colatina e região.</span>
        </aside>
      </section>
    </div>
  );
}