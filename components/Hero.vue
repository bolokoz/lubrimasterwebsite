<template>
<section class="bg-green-100 dark:bg-gray-900 pb-6">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-red-700 dark:text-white">Lubrimaster S.A.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Importadora e Distribuidora de óleos lubrificantes, filtros automotivos, aditivos, baterias e outros. <b>Há mais de 30 anos no mercado. </b></p>
            <NuxtLink to="/productos" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-brand-dark border rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Conhecer produtos
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </NuxtLink>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                {{ $t('hero_button') }}
            </a> 
        </div>
        <div class="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
            <img class="rounded-lg" src="~/assets/images/hero3.jpg" alt="mockup">
        </div>                
    </div>

    <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">Marcas parceiras</span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="#" class="mr-2 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="rounded-lg" src="~/assets/images/lubrax.jpg" alt="mockup">                    
                </a>
              
                <a href="#" class="mr-2 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="rounded-lg" src="~/assets/images/girux.png" alt="mockup">                    
                </a>
              
                <a href="#" class="mr-2 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="rounded-lg" src="~/assets/images/max1.png" alt="mockup">                    
                </a>
                <a href="#" class="mr-2 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <img class="rounded-lg" src="~/assets/images/baterax_logo.png" alt="mockup" width="100px">                    
                </a>
              
            </div>
        </div> 
</section>
</template>

<script setup>
const { locale } = useI18n()
</script>
