---
next: false
---

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

# Receitas

<div class="receitas-list">
  <div v-for="item in theme.sidebar.map((item) => item.items).flat()" :key="item.link">
    <a :href="item.link">{{ item.text }}</a>
  </div>
</div>

## Patrocinadores

Este projeto é mantido com o apoio de nossa comunidade. Se você gosta do Quick Receitas e deseja apoiar seu desenvolvimento, considere se tornar um patrocinador.

## Contribuidores

Agradecemos a todas as pessoas que dedicam seu tempo para tornar este projeto melhor. Se você deseja contribuir, visite nosso [repositório no GitHub](https://github.com/seu-repositorio).


<style>
.receitas-list {
  margin-top: 2rem;
}
.receitas-list a {
  display: block;
  padding: 0.5rem 0;
}
</style>


