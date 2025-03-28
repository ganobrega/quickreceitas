import type { DefaultTheme } from "vitepress";

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: "/images/logo.png",
    alt: "QuickReceitas Logo",
  },

  editLink: {
    pattern: `https://github.com/${process.env.VITE_GITHUB_REPO}/edit/main/src/:path`,
    text: "Edite esta página no GitHub",
  },

  notFound: {
    linkText: "Voltar para a página inicial",
    title: "Página não encontrada",
    quote:
      "Mas se você não mudar de direção, e se você continuar olhando, você pode acabar onde você está indo.",
  },

  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "Pesquisar",
          buttonAriaLabel: "Pesquisar",
        },
        modal: {
          noResultsText: "Nenhuma resultado encontrado",
          resetButtonTitle: "Limpar",
          displayDetails: "Exibir detalhes",
        },
      },
    },
  },

  lastUpdated: {
    text: "Atualizado em",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium",
    },
  },

  nav: [
    { text: "Home", link: "/" },
    { text: "Receitas", link: "/receitas/" },
    { text: "Patrocinadores", link: "/patrocinadores" },
    { text: "Sobre", link: "/sobre" },
  ],

  sidebar: [
    {
      text: "Nível de Dificuldade",
      items: [
        { text: "Básico", link: "/receitas/nivel/basico" },
        { text: "Iniciante", link: "/receitas/nivel/iniciante" },
        { text: "Intermediário", link: "/receitas/nivel/intermediario" },
        { text: "Avançado", link: "/receitas/nivel/avancado" },
        { text: "Chef", link: "/receitas/nivel/chef" },
      ],
    },
    {
      text: "Categorias Principais",
      items: [
        { text: "Pratos Principais", link: "/receitas/pratos-principais" },
        { text: "Sobremesas", link: "/receitas/sobremesas" },
        { text: "Lanches", link: "/receitas/lanches" },
        { text: "Bebidas", link: "/receitas/bebidas" },
        { text: "Sopas", link: "/receitas/sopas" },
        { text: "Saladas", link: "/receitas/saladas" },
        { text: "Massas", link: "/receitas/massas" },
        { text: "Bolos e Tortas", link: "/receitas/bolos-tortas" },
      ],
    },
    {
      text: "Cozinhas do Mundo",
      items: [
        { text: "Brasileira", link: "/receitas/brasileira" },
        { text: "Italiana", link: "/receitas/italiana" },
        { text: "Japonesa", link: "/receitas/japonesa" },
        { text: "Mexicana", link: "/receitas/mexicana" },
        { text: "Árabe", link: "/receitas/arabe" },
      ],
    },
    {
      text: "Dietas Específicas",
      items: [
        { text: "Vegetarianas", link: "/receitas/vegetarianas" },
        { text: "Veganas", link: "/receitas/veganas" },
        { text: "Low Carb", link: "/receitas/low-carb" },
        { text: "Sem Glúten", link: "/receitas/sem-gluten" },
        { text: "Sem Lactose", link: "/receitas/sem-lactose" },
      ],
    },
    {
      text: "Ocasiões Especiais",
      items: [
        { text: "Café da Manhã", link: "/receitas/cafe-da-manha" },
        { text: "Receitas Rápidas", link: "/receitas/rapidas" },
        { text: "Festa Infantil", link: "/receitas/festa-infantil" },
        { text: "Churrasco", link: "/receitas/churrasco" },
        { text: "Natal", link: "/receitas/natal" },
        { text: "Páscoa", link: "/receitas/pascoa" },
      ],
    },
  ],

  socialLinks: [
    {
      icon: "github",
      link: `https://github.com/${process.env.VITE_GITHUB_REPO}`,
    },
  ],

  docFooter: {
    prev: "Pagina anterior",
    next: "Próxima página",
  },

  darkModeSwitchLabel: "Modo Escuro",
  lightModeSwitchTitle: "Alterar para o modo claro",
  darkModeSwitchTitle: "Alterar para o modo escuro",
  returnToTopLabel: "Voltar para o topo",
};

export default themeConfig;
