---
---

<script setup>
import { defineClientComponent } from 'vitepress'

const ClientComp = defineClientComponent(() => {
  return import('./__extends__/ListaDeCompras.vue')
})
</script>

# Lista de Compras

<ClientOnly>
  <ClientComp />
</ClientOnly>