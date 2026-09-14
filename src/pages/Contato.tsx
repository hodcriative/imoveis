import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contato() {
  return (
    <div>
      <section className="page-hero"><div className="container"><span className="eyebrow light">Contato</span><h1>Vamos encontrar seu próximo imóvel?</h1><p>Entre em contato e conte o que você está procurando.</p></div></section>
      <section className="container contact-page">
        <div className="contact-info">
          <span className="eyebrow">Fale comigo</span>
          <h2>Estou à disposição para ajudar.</h2>
          <p>Use o canal que for mais conveniente. Para atendimento rápido, o WhatsApp é a melhor opção.</p>
          <div className="contact-items">
            <a href="https://wa.me/[WHATSAPP]" target="_blank" rel="noreferrer"><MessageCircle/><span><small>WhatsApp</small><strong>[WHATSAPP]</strong></span></a>
            <a href="tel:[TELEFONE]"><Phone/><span><small>Telefone</small><strong>[TELEFONE]</strong></span></a>
            <a href="mailto:[EMAIL]"><Mail/><span><small>E-mail</small><strong>[EMAIL]</strong></span></a>
            <a href="#"><Instagram/><span><small>Instagram</small><strong>[INSTAGRAM]</strong></span></a>
            <div><MapPin/><span><small>Atendimento</small><strong>Colatina – ES e região</strong></span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => {e.preventDefault(); alert("Demonstração: formulário pronto para futura integração.");}}>
          <h3>Envie uma mensagem</h3>
          <label>Nome<input required placeholder="Seu nome"/></label>
          <label>WhatsApp<input required placeholder="(00) 00000-0000"/></label>
          <label>O que você procura?<select><option>Comprar um imóvel</option><option>Alugar um imóvel</option><option>Quero anunciar meu imóvel</option><option>Outro assunto</option></select></label>
          <label>Mensagem<textarea rows={5} placeholder="Conte um pouco sobre o que você procura..."/></label>
          <button className="btn btn-dark">Enviar mensagem</button>
          <small>Este formulário é demonstrativo nesta versão.</small>
        </form>
      </section>
    </div>
  );
}