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

<style>
.receitas-list {
  margin-top: 2rem;
}
.receitas-list a {
  display: block;
  padding: 0.5rem 0;
}
</style>


