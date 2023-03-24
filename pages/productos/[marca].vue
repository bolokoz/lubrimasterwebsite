<script setup>
  const route = useRoute()
  // When accessing /posts/1, route.params.id will be 1
  const marca = (route.params.marca)
</script>

<template>
  <div class="container mx-auto">
    <div class="page bg-purple-100">
      <h1 class="text-5xl mb-5">{{ marca }}</h1>
  
      <p class="mb-3">
       {{ $t('desculpe-site-em-construcao') }}
      </p>
  
      <!-- <nuxt-link class="bg-white p-2 m-3" to="/post">Go Back</nuxt-link> -->
    </div>
    </div>
</template>

  