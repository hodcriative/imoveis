export type Finalidade = "compra" | "aluguel";
export type TipoImovel = "Casa" | "Apartamento" | "Terreno" | "Comercial";

export interface Imovel {
  id: string;
  titulo: string;
  finalidade: Finalidade;
  tipo: TipoImovel;
  cidade: string;
  bairro: string;
  preco: number;
  area: number;
  quartos: number;
  suites: number;
  banheiros: number;
  vagas: number;
  destaque?: boolean;
  descricao: string;
  caracteristicas: string[];
  imagens: string[];
}

const photo = (seed: string, width = 1200, height = 800) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${width}&q=85`;

export const imoveis: Imovel[] = [
  {
    id: "casa-alto-vila-nova",
    titulo: "Casa contemporânea com área gourmet",
    finalidade: "compra",
    tipo: "Casa",
    cidade: "Colatina - ES",
    bairro: "Vila Nova",
    preco: 685000,
    area: 220,
    quartos: 3,
    suites: 1,
    banheiros: 3,
    vagas: 2,
    destaque: true,
    descricao: "Uma residência espaçosa, iluminada e pensada para quem valoriza conforto, praticidade e bons momentos em família.",
    caracteristicas: ["Área gourmet", "Quintal", "Cozinha planejada", "Suíte", "2 vagas", "Iluminação natural"],
    imagens: [
      photo("photo-1600585154340-be6161a56a0c"),
      photo("photo-1600607687920-4e2a09cf159d"),
      photo("photo-1600566753086-00f18fb6b3ea"),
    ],
  },
  {
    id: "apartamento-centro-colatina",
    titulo: "Apartamento moderno próximo ao Centro",
    finalidade: "compra",
    tipo: "Apartamento",
    cidade: "Colatina - ES",
    bairro: "Centro",
    preco: 425000,
    area: 92,
    quartos: 2,
    suites: 1,
    banheiros: 2,
    vagas: 1,
    destaque: true,
    descricao: "Apartamento elegante com ambientes bem distribuídos, excelente iluminação e localização prática para a rotina.",
    caracteristicas: ["Varanda", "Elevador", "Suíte", "Armários planejados", "1 vaga", "Portaria"],
    imagens: [
      photo("photo-1600607687939-ce8a6c25118c"),
      photo("photo-1600210492486-724fe5c67fb0"),
      photo("photo-1600566753190-17f0baa2a6c3"),
    ],
  },
  {
    id: "casa-jardim-planalto",
    titulo: "Casa ampla em bairro residencial",
    finalidade: "compra",
    tipo: "Casa",
    cidade: "Colatina - ES",
    bairro: "Jardim Planalto",
    preco: 540000,
    area: 180,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 2,
    destaque: true,
    descricao: "Opção confortável para famílias que procuram tranquilidade, espaço e uma casa pronta para receber.",
    caracteristicas: ["Garagem coberta", "Quintal", "Área de serviço", "Suíte", "Sala ampla"],
    imagens: [
      photo("photo-1605146769289-440113cc3d00"),
      photo("photo-1600566753051-2c6a3c6e8e5d"),
      photo("photo-1600585154526-990dced4db0d"),
    ],
  },
  {
    id: "apartamento-aluguel-lacerdinha",
    titulo: "Apartamento compacto e sofisticado",
    finalidade: "aluguel",
    tipo: "Apartamento",
    cidade: "Colatina - ES",
    bairro: "Lacerdinha",
    preco: 2450,
    area: 76,
    quartos: 2,
    suites: 1,
    banheiros: 2,
    vagas: 1,
    destaque: true,
    descricao: "Apartamento funcional e moderno para quem deseja praticidade sem abrir mão de conforto.",
    caracteristicas: ["Varanda", "Elevador", "Suíte", "Armários", "1 vaga"],
    imagens: [
      photo("photo-1600607687920-4e2a09cf159d"),
      photo("photo-1600210491892-03d54c0aaf87"),
      photo("photo-1600566753086-00f18fb6b3ea"),
    ],
  },
  {
    id: "terreno-maria-das-gracas",
    titulo: "Terreno residencial com ótima topografia",
    finalidade: "compra",
    tipo: "Terreno",
    cidade: "Colatina - ES",
    bairro: "Maria das Graças",
    preco: 295000,
    area: 360,
    quartos: 0,
    suites: 0,
    banheiros: 0,
    vagas: 0,
    destaque: true,
    descricao: "Terreno com perfil residencial e bom potencial para construção de um projeto personalizado.",
    caracteristicas: ["360 m²", "Boa topografia", "Área residencial", "Fácil acesso"],
    imagens: [
      photo("photo-1500382017468-9049fed747ef"),
      photo("photo-1449157291145-7efd050a4d0e"),
    ],
  },
  {
    id: "sala-comercial-centro",
    titulo: "Sala comercial pronta para seu negócio",
    finalidade: "aluguel",
    tipo: "Comercial",
    cidade: "Colatina - ES",
    bairro: "Centro",
    preco: 1850,
    area: 58,
    quartos: 0,
    suites: 0,
    banheiros: 1,
    vagas: 0,
    destaque: true,
    descricao: "Espaço comercial com apresentação profissional e localização estratégica para atendimento ao público.",
    caracteristicas: ["Recepção", "Banheiro", "Iluminação", "Ponto comercial", "Fácil acesso"],
    imagens: [
      photo("photo-1497366754035-f200968a6e72"),
      photo("photo-1497366811353-6870744d04b2"),
    ],
  },
  {
    id: "casa-colina",
    titulo: "Casa com vista e ambientes integrados",
    finalidade: "compra",
    tipo: "Casa",
    cidade: "Colatina - ES",
    bairro: "Colina",
    preco: 790000,
    area: 250,
    quartos: 4,
    suites: 2,
    banheiros: 4,
    vagas: 3,
    descricao: "Projeto residencial com espaços generosos, integração entre sala e área externa e ótima estrutura para a família.",
    caracteristicas: ["2 suítes", "Área externa", "3 vagas", "Sala integrada", "Lavanderia"],
    imagens: [
      photo("photo-1600585154526-990dced4db0d"),
      photo("photo-1600607688969-a5bfcd646154"),
      photo("photo-1600607687920-4e2a09cf159d"),
    ],
  },
  {
    id: "apartamento-aluguel-moacyr",
    titulo: "Apartamento familiar em região tranquila",
    finalidade: "aluguel",
    tipo: "Apartamento",
    cidade: "Colatina - ES",
    bairro: "Moacyr Brotas",
    preco: 2100,
    area: 84,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 1,
    descricao: "Uma opção equilibrada para quem procura três quartos, conforto e praticidade no dia a dia.",
    caracteristicas: ["3 quartos", "Suíte", "Varanda", "Elevador", "1 vaga"],
    imagens: [
      photo("photo-1600210492486-724fe5c67fb0"),
      photo("photo-1600607688969-a5bfcd646154"),
      photo("photo-1600566753190-17f0baa2a6c3"),
    ],
  },
];

export function formatPrice(value: number, finalidade: Finalidade) {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
  return finalidade === "aluguel" ? `${formatted}/mês` : formatted;
}