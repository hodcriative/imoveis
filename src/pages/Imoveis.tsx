import { useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ImovelCard from "../components/ImovelCard";
import { imoveis } from "../data/imoveis";

export default function Imoveis() {
  const [params, setParams] = useSearchParams();
  const finalidade = params.get("finalidade") || "todos";
  const tipo = params.get("tipo") || "todos";
  const busca = params.get("busca") || "";

  const filtered = useMemo(() => imoveis.filter(i => {
    const matchFinalidade = finalidade === "todos" || i.finalidade === finalidade;
    const matchTipo = tipo === "todos" || i.tipo === tipo;
    const text = `${i.titulo} ${i.bairro} ${i.cidade}`.toLowerCase();
    return matchFinalidade && matchTipo && text.includes(busca.toLowerCase());
  }), [finalidade, tipo, busca]);

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value === "todos" || !value) next.delete(key); else next.set(key, value);
    setParams(next);
  };

  return (
    <div className="catalog-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Catálogo</span>
          <h1>Encontre seu próximo imóvel.</h1>
          <p>Explore opções selecionadas para compra e aluguel em Colatina e região.</p>
        </div>
      </section>

      <section className="container catalog-content">
        <div className="filter-bar">
          <div className="filter-title"><SlidersHorizontal size={18}/><strong>Filtre sua busca</strong></div>
          <select value={finalidade} onChange={e => set("finalidade", e.target.value)}>
            <option value="todos">Comprar ou alugar</option><option value="compra">Comprar</option><option value="aluguel">Alugar</option>
          </select>
          <select value={tipo} onChange={e => set("tipo", e.target.value)}>
            <option value="todos">Todos os tipos</option><option value="Casa">Casa</option><option value="Apartamento">Apartamento</option><option value="Terreno">Terreno</option><option value="Comercial">Comercial</option>
          </select>
          <div className="filter-input"><Search size={17}/><input value={busca} onChange={e => set("busca", e.target.value)} placeholder="Buscar bairro ou cidade"/></div>
        </div>

        <div className="catalog-result-head">
          <span><strong>{filtered.length}</strong> imóveis encontrados</span>
          {(finalidade !== "todos" || tipo !== "todos" || busca) && <button onClick={() => setParams({})}>Limpar filtros</button>}
        </div>

        {filtered.length ? (
          <div className="property-grid">{filtered.map(i => <ImovelCard key={i.id} imovel={i}/>)}</div>
        ) : (
          <div className="empty-state"><h2>Nenhum imóvel encontrado</h2><p>Tente ajustar os filtros ou fazer uma nova busca.</p></div>
        )}
      </section>
    </div>
  );
}