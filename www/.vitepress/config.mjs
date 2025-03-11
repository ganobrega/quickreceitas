import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QuickReceitas",
  description: "Receitas rápidas e fáceis de fazer",

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    
    // Microsoft Clarity - Otimizado
    ['script', {
      async: true,
      defer: true
    }, `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "qd4y5g3j4f");
    `],

    // Google Analytics - Otimizado
    ['script', { 
      src: 'https://www.googletagmanager.com/gtag/js?id=G-7EF2NVE4ZK',
      async: true,
      defer: true
    }],
    ['script', {
      async: true,
      defer: true
    }, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7EF2NVE4ZK', {
        'send_page_view': true,
        'transport_type': 'beacon'
      });
    `]
  ],

  base: '/',

  themeConfig: {
    logo: {
      src: '/logo.png',
      alt: 'QuickReceitas Logo'
    },

    editLink: {
      pattern: 'https://github.com/ganobrega/quickreceitas/edit/main/www/:path',
      text: 'Edite esta página no GitHub'
    },

    notFound: {
      linkText: 'Voltar para a página inicial',
      title: 'Página não encontrada',
      quote: 'Mas se você não mudar de direção, e se você continuar olhando, você pode acabar onde você está indo.'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Pesquisar',
            buttonAriaLabel: 'Pesquisar'
          },
          modal: {
            noResultsText: 'Nenhuma resultado encontrado',
            resetButtonTitle: 'Limpar',
            displayDetails: 'Exibir detalhes',
          }

        }
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Receitas', link: '/receitas/' },
      { text: 'Lista de Compras', link: '/lista-de-compras' },
      { text: 'Sobre', link: '/sobre' }
    ],

    sidebar: [
      {
        text: 'Nível de Dificuldade',
        items: [
          { text: 'Básico', link: '/receitas/nivel/basico' },
          { text: 'Iniciante', link: '/receitas/nivel/iniciante' },
          { text: 'Intermediário', link: '/receitas/nivel/intermediario' },
          { text: 'Avançado', link: '/receitas/nivel/avancado' },
          { text: 'Chef', link: '/receitas/nivel/chef' }
        ]
      },
      {
        text: 'Categorias Principais',
        items: [
          { text: 'Pratos Principais', link: '/receitas/pratos-principais' },
          { text: 'Sobremesas', link: '/receitas/sobremesas' },
          { text: 'Lanches', link: '/receitas/lanches' },
          { text: 'Bebidas', link: '/receitas/bebidas' },
          { text: 'Sopas', link: '/receitas/sopas' },
          { text: 'Saladas', link: '/receitas/saladas' },
          { text: 'Massas', link: '/receitas/massas' },
          { text: 'Bolos e Tortas', link: '/receitas/bolos-tortas' }
        ]
      },
      {
        text: 'Cozinhas do Mundo',
        items: [
          { text: 'Brasileira', link: '/receitas/brasileira' },
          { text: 'Italiana', link: '/receitas/italiana' },
          { text: 'Japonesa', link: '/receitas/japonesa' },
          { text: 'Mexicana', link: '/receitas/mexicana' },
          { text: 'Árabe', link: '/receitas/arabe' }
        ]
      },
      {
        text: 'Dietas Específicas',
        items: [
          { text: 'Vegetarianas', link: '/receitas/vegetarianas' },
          { text: 'Veganas', link: '/receitas/veganas' },
          { text: 'Low Carb', link: '/receitas/low-carb' },
          { text: 'Sem Glúten', link: '/receitas/sem-gluten' },
          { text: 'Sem Lactose', link: '/receitas/sem-lactose' }
        ]
      },
      {
        text: 'Ocasiões Especiais',
        items: [
          { text: 'Café da Manhã', link: '/receitas/cafe-da-manha' },
          { text: 'Receitas Rápidas', link: '/receitas/rapidas' },
          { text: 'Festa Infantil', link: '/receitas/festa-infantil' },
          { text: 'Churrasco', link: '/receitas/churrasco' },
          { text: 'Natal', link: '/receitas/natal' },
          { text: 'Páscoa', link: '/receitas/pascoa' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ganobrega/quickreceitas' }
    ]
  },
})
