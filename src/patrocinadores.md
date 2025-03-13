---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/ganobrega.png',
    name: 'Gabriel Nobrega',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ganobrega' },
      { icon: 'twitter', link: 'https://twitter.com/ganobr' }
    ],
    sponsor: 'https://github.com/sponsors/ganobrega',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Patrocinadores
    </template>
    <template #lead>
    Este projeto é mantido com o apoio de nossa comunidade. Se você gosta do Quick Receitas e deseja apoiar seu desenvolvimento, considere se tornar um patrocinador. 
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>