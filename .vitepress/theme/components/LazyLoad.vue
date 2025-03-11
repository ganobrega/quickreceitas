<script setup>
import { onMounted } from 'vue'

import LazyLoad from 'vanilla-lazyload'

onMounted(() => {
  const lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
    elements_selector: '.VPImage',
  })
})
</script>

<template>
  <div></div>
</template>