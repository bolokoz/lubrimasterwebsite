<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <NuxtLink to="/" class="flex items-center">
      <img src="~/assets/images/logo.png" class="h-6 mr-3 sm:h-9" alt="Lubrimaster Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Lubrimaster</span>
  </NuxtLink>
  <div class="flex md:order-2">

        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 

        
            <Icon name="uil:language" size="1.5em"/>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <NuxtLink :to="switchLocalePath('es')" class="block px-4 py-2 hover:bg-brand-light dark:hover:bg-gray-600 dark:hover:text-white">Español</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="switchLocalePath('pt')" class="block px-4 py-2 hover:bg-brand-light dark:hover:bg-gray-600 dark:hover:text-white">Português</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="switchLocalePath('gn')" class="block px-4 py-2 hover:bg-brand-light  dark:hover:bg-gray-600 dark:hover:text-white">Guarani</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="switchLocalePath('en')" class="block px-4 py-2 hover:bg-brand-light dark:hover:bg-gray-600 dark:hover:text-white">English</NuxtLink>
                </li>
            </ul>
        </div>

      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contato</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">{{ $t('header.open_menu') }}</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NuxtLink activeClass="text-blue-700" to="/" class="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">{{ $t('header.home') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink activeClass="text-blue-700" to="/empresa" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('header.about_us') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink activeClass="text-blue-700" to="/servicios" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Servicios</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/productos" activeClass="text-blue-700" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('header.products') }}</NuxtLink>
      </li>
    


    </ul>
  </div>
  </div>
</nav>


</template>

<script setup>
import { onMounted } from 'vue'
import { initCollapses, initDropdowns } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initCollapses();
    initDropdowns();
})

</script>
