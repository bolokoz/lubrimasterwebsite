<template>
    <!-- component -->
<div class="py-20 bg-brand-light">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Serviços e produtos</h2>
            <!-- <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p> -->
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-80" 
                    src="~/assets/images/deposito.jpg" alt="woman" loading="lazy" width="640" height="805">
                <div>
                    <h4 class="text-2xl">Venda atacado e distribuição</h4>
                    <span class="block text-sm text-gray-500">Óleo lubrificantes e Filtros</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-80" 
                src="~/assets/images/balcao.jpg" alt="woman" loading="lazy" width="1000" height="667">
                <div>
                    <h4 class="text-2xl">Venda balcão e varejo</h4>
                    <span class="block text-sm text-gray-500">Atendemos toda região</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                src="~/assets/images/troca.jpg" alt="man" loading="lazy" width="1000" height="667">
                <div>
                    <h4 class="text-2xl">Serviços de troca</h4>
                    <span class="block text-sm text-gray-500">Duas localidades para melhor atendê-lo</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>