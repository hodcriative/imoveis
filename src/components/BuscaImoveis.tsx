import { Search, SlidersHorizontal } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function BuscaImoveis({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [finalidade, setFinalidade] = useState(params.get("finalidade") || "todos");
  const [tipo, setTipo] = useState(params.get("tipo") || "todos");
  const [busca, setBusca] = useState(params.get("busca") || "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const query = new URLSearchParams();
    if (finalidade !== "todos") query.set("finalidade", finalidade);
    if (tipo !== "todos") query.set("tipo", tipo);
    if (busca) query.set("busca", busca);
    navigate(`/imoveis${query.toString() ? `?${query}` : ""}`);
  }

  return (
    <form className={`search-panel ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="search-field">
        <label>Finalidade</label>
        <select value={finalidade} onChange={e => setFinalidade(e.target.value)}>
          <option value="todos">Comprar ou alugar</option>
          <option value="compra">Comprar</option>
          <option value="aluguel">Alugar</option>
        </select>
      </div>
      <div className="search-field">
        <label>Tipo de imóvel</label>
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="todos">Todos os tipos</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Terreno">Terreno</option>
          <option value="Comercial">Comercial</option>
        </select>
      </div>
      <div className="search-field search-text">
        <label>Localização</label>
        <input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Bairro ou cidade" />
      </div>
      <button className="btn btn-dark search-button"><Search size={18}/> Buscar imóveis</button>
      {!compact && <span className="search-note"><SlidersHorizontal size={15}/> Mais filtros disponíveis no catálogo</span>}
    </form>
  );
}