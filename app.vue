<template>

    <Header></Header>

    <NuxtPage/>
    
    <Footer></Footer>

</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Lubrimaster',
  ogTitle: 'Lubrimaster S.A.',
  description: 'Distribuidora Aceites Lubricantes, Filtros, aditivos y baterias',
  ogDescription: 'Distribuidora Aceites Lubricantes, Filtros, aditivos y baterias',
  ogImage: '~/assets/images/logo.png',
  twitterCard: 'summary_large_image',
})
</script>