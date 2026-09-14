import { CheckCircle2, MessageCircle, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div>
      <section className="page-hero">
        <div className="container"><span className="eyebrow light">Sobre</span><h1>Um atendimento pensado para você.</h1><p>Conheça a proposta de trabalho de Cléverson, Consultor de Imóveis.</p></div>
      </section>
      <section className="container about-page">
        <div className="about-photo large"><div className="photo-placeholder">[FOTO DO CLÉVERSON]</div></div>
        <div className="about-text">
          <span className="eyebrow">Prazer, sou Cléverson</span>
          <h2>Seu imóvel, sua decisão. <em>Meu papel é facilitar o caminho.</em></h2>
          <p>Escolher um imóvel envolve planos, expectativas e decisões importantes. Por isso, a proposta é oferecer um atendimento próximo, claro e personalizado desde a primeira conversa.</p>
          <p>Seja para comprar, alugar ou encontrar uma oportunidade, cada busca começa entendendo o que realmente faz sentido para você.</p>
          <div className="check-list"><span><CheckCircle2/> Atendimento personalizado</span><span><CheckCircle2/> Transparência nas informações</span><span><CheckCircle2/> Acompanhamento durante a negociação</span></div>
          <Link className="btn btn-dark" to="/contato">Entre em contato <MessageCircle size={18}/></Link>
        </div>
      </section>
      <section className="service-section">
        <div className="container values-grid">
          <div><ShieldCheck/><h3>Confiança</h3><p>Informações claras para que cada decisão seja tomada com tranquilidade.</p></div>
          <div><Target/><h3>Objetividade</h3><p>Busca direcionada às características que realmente importam para você.</p></div>
          <div><MessageCircle/><h3>Proximidade</h3><p>Comunicação simples e acompanhamento próximo em cada etapa.</p></div>
        </div>
      </section>
    </div>
  );
}