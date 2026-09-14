import { ArrowRight, CheckCircle2, ChevronRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ImovelCard from "../components/ImovelCard";
import BuscaImoveis from "../components/BuscaImoveis";
import { imoveis } from "../data/imoveis";

export default function Home() {
  const destaques = imoveis.filter(i => i.destaque).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"/>
        <div className="container hero-content">
          <span className="eyebrow light"><Sparkles size={15}/> Imóveis em Colatina e região</span>
          <h1>O imóvel certo começa com a <em>escolha certa.</em></h1>
          <p>Encontre seu próximo endereço com atendimento próximo, transparente e personalizado.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/imoveis">Ver imóveis <ArrowRight size={18}/></Link>
            <a className="btn btn-outline-light" href="https://wa.me/[WHATSAPP]" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
          </div>
        </div>
        <div className="hero-scroll">Explore os imóveis <ChevronRight size={16}/></div>
      </section>

      <section className="search-overlap container">
        <BuscaImoveis />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Seleção especial</span>
              <h2>Imóveis em destaque</h2>
            </div>
            <Link className="text-link" to="/imoveis">Ver todos <ArrowRight size={17}/></Link>
          </div>
          <div className="property-grid">{destaques.map(i => <ImovelCard key={i.id} imovel={i}/>)}</div>
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-grid">
          <div className="about-photo">
            <div className="photo-placeholder">[FOTO DO CLÉVERSON]</div>
          </div>
          <div className="about-text">
            <span className="eyebrow">Atendimento personalizado</span>
            <h2>Mais do que encontrar imóveis. <em>Encontrar possibilidades.</em></h2>
            <p>Meu objetivo é entender o que você procura e tornar cada etapa da escolha mais simples, segura e transparente.</p>
            <div className="check-list">
              <span><CheckCircle2/> Atendimento próximo</span>
              <span><CheckCircle2/> Transparência em cada etapa</span>
              <span><CheckCircle2/> Conhecimento da região</span>
            </div>
            <Link className="btn btn-dark" to="/sobre">Conheça meu trabalho <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading centered">
            <div><span className="eyebrow">Por que contar comigo</span><h2>Uma busca mais simples.</h2></div>
          </div>
          <div className="benefits">
            <div><ShieldCheck size={28}/><h3>Segurança</h3><p>Informações organizadas e acompanhamento durante a jornada.</p></div>
            <div><MapPin size={28}/><h3>Conhecimento local</h3><p>Uma visão prática para quem procura imóveis em Colatina e região.</p></div>
            <div><Sparkles size={28}/><h3>Atendimento humano</h3><p>Conversa direta para entender necessidades e encontrar boas opções.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow light">Vamos conversar?</span>
          <h2>Seu próximo endereço pode estar mais perto do que você imagina.</h2>
          <a className="btn btn-gold" href="https://wa.me/[WHATSAPP]" target="_blank" rel="noreferrer">Falar com Cléverson <ArrowRight size={18}/></a>
        </div>
      </section>
    </>
  );
}