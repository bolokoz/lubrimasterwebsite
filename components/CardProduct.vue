<template>
     <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <nuxt-img class="rounded-t-lg max-w-xs mx-auto" :src="`/images/${image}`" />
    </a>
    <div class="p-5">
        <NuxtLink :to="link">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
        </NuxtLink>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
        <!-- <NuxtLink :to="link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Ver produtos {{ title }}
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </NuxtLink> -->
    </div>
</div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  link:String
})

// const imageUrl = new URL(`~/assets/images/${props.image}`, import.meta.url).href

</script>