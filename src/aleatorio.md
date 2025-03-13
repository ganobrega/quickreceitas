---
next: false
---

<script setup>
import { useData, withBase } from 'vitepress'
import { ref, onMounted } from 'vue'    

const { site, theme, page, frontmatter } = useData()

// Referência para armazenar as páginas
const pages = ref([])

// Função para buscar e parsear o sitemap
const fetchSitemap = async () => {
  try {
    const response = await fetch(`/sitemap.xml`)
    const text = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, 'text/xml')
    const urls = xmlDoc.getElementsByTagName('url')
    
    // Filtra apenas as URLs que contêm '/receitas/'
    const recipePages = Array.from(urls)
      .map(url => {
        const fullUrl = url.getElementsByTagName('loc')[0].textContent
        // Remove o origin (https://dominio.com) da URL
        const urlWithoutOrigin = new URL(fullUrl).pathname
        return urlWithoutOrigin
      })
      .filter(url => url.includes('/receitas/'))
      .map(url => ({
        link: url.replace(site.value.base, ''),
        text: url.split('/').pop().replace(/-/g, ' ').replace('.html', '')
      }))
    
    // Redireciona para uma receita aleatória assim que carregar as páginas
    if (recipePages.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipePages.length)
      const randomRecipe = recipePages[randomIndex]
      window.location.href = withBase(randomRecipe.link)
    }
  } catch (error) {
    console.error('Erro ao carregar o sitemap:', error)
  }
}

// Carrega o sitemap quando o componente for montado
onMounted(() => {
  fetchSitemap()
})
</script>

<div>Redirecionando para uma receita aleatória...</div>