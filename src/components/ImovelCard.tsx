import { Link } from "react-router-dom";
import { Bath, BedDouble, CarFront, MapPin, Maximize } from "lucide-react";
import type { Imovel } from "../data/imoveis";
import { formatPrice } from "../data/imoveis";

export default function ImovelCard({ imovel }: { imovel: Imovel }) {
  return (
    <article className="property-card">
      <Link to={`/imoveis/${imovel.id}`} className="property-image-wrap">
        <img src={imovel.imagens[0]} alt={imovel.titulo} className="property-image" loading="lazy" />
        <span className={`property-badge ${imovel.finalidade}`}>{imovel.finalidade === "compra" ? "À venda" : "Para alugar"}</span>
      </Link>
      <div className="property-content">
        <span className="property-type">{imovel.tipo}</span>
        <Link to={`/imoveis/${imovel.id}`}><h3>{imovel.titulo}</h3></Link>
        <p className="property-location"><MapPin size={15}/> {imovel.bairro}, {imovel.cidade}</p>
        <strong className="property-price">{formatPrice(imovel.preco, imovel.finalidade)}</strong>
        <div className="property-features">
          <span><Maximize size={15}/>{imovel.area} m²</span>
          {imovel.quartos > 0 && <span><BedDouble size={15}/>{imovel.quartos} q.</span>}
          {imovel.banheiros > 0 && <span><Bath size={15}/>{imovel.banheiros} b.</span>}
          {imovel.vagas > 0 && <span><CarFront size={15}/>{imovel.vagas} v.</span>}
        </div>
      </div>
    </article>
  );
}