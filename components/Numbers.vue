<template>
    <section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                <number
    ref="number1"
	:from="100"
	:to="90000"
	:duration="3.4"
    :delay="2"
    easing="Power4.easeOut"/></dt>
              <dd class="font-bold text-gray-500 dark:text-gray-400">Litros vendidos</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
            <number
    ref="number2"
	:from="100"
	:to="10000"
	:duration="3"
    
    :delay="1.3"
    easing="Power1.easeOut"/>
</dt>
              <dd class="font-bold text-gray-500 dark:text-gray-400">Clientes atendidos</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">                <number
    ref="number3"
	:from="100"
	:to="8000"
	:duration="3.7"
    :delay="2"
    easing="Power1.easeOut"/></dt>
              <dd class="font-bold text-gray-500 dark:text-gray-400">trocas de óleo</dd>
          </div>
      </dl>
  </div>
</section>
</template>