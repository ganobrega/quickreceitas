
<template>
  <div>
  
  <div class="my-bar">
    <input 
      v-model="novoItem" 
      @keyup.enter="adicionarItem"
      placeholder="Digite um item"
      class="my-input"
    />
    <VPButton text="Adicionar" theme="brand" @click="adicionarItem" />
  </div>


    <ul>
      <li v-for="(item, index) in itens" :key="index">
        <input type="checkbox" v-model="item.comprado">
        {{ item.nome }}
        <VPButton text="❌" theme="alt" size="medium"  @click="itens.splice(index, 1)"></VPButton>
      </li>
    </ul>
  </div>
</template>

<style>



</style>

<style scoped>

.my-bar {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: text;
}

@media (max-width: 767px) {
  .my-bar {
    padding: 0 8px;
  }
}

.my-bar:focus-within {
  border-color: var(--vp-c-brand-1);
}

.my-input {
  padding: 6px 12px;
  font-size: inherit;
  width: 100%;
}

@media (max-width: 767px) {
  .my-input {
    padding: 6px 4px;
  }
}

.local-search-icon {
  display: block;
  font-size: 18px;
}

.navigate-icon {
  display: block;
  font-size: 14px;
}

.search-icon {
  margin: 8px;
}

@media (max-width: 767px) {
  .search-icon {
    display: none;
  }
}

.my-input:focus-within {
  border-color: var(--vp-c-brand-1);
}

.search-actions {
  display: flex;
  gap: 4px;
}

@media (any-pointer: coarse) {
  .search-actions {
    gap: 8px;
  }
}

@media (min-width: 769px) {
  .search-actions.before {
    display: none;
  }
}

.search-actions button {
  padding: 8px;
}

.search-actions button:not([disabled]):hover,
.toggle-layout-button.detailed-list {
  color: var(--vp-c-brand-1);
}

.search-actions button.clear-button:disabled {
  opacity: 0.37;
}

svg {
  flex: none;
}
</style>


<script setup>
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
// const VPLocalSearch = __VP_LOCAL_SEARCH__
//   ? defineAsyncComponent(() => import('./VPLocalInput.vue'))
//   : () => null

const novoItem = ref('')
const itens = ref([])

const adicionarItem = () => {
  if (novoItem.value.trim()) {
    itens.value.push({
      nome: novoItem.value,
      comprado: false
    })
    novoItem.value = ''
  }
}
</script>