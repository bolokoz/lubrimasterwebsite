<template>
    <section class="bg-brand dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Horario de atendimento</h2>
            <p class="mb-4">
                <ul>
                    <li>

                        Segunda a sexta: 08:00hs - 17:30hs
                    </li>
                    <li>

                        Sabado: 08:00hs - 12:00hs
                    </li>
                </ul>

            </p>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Localização</h2>
            <p class="mb-4">
                <ul>
                    <li>
                        Avenida Carlos Antonio Lopez com Rua Benjamin Aceval
                    </li>
                </ul>

            </p>
        </div>
        <div class="grid mt-8">
            <div class="map-responsive">
                <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11530.36336470397!2d-54.585005482211514!3d-20.45460114903385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8954ac0b10d%3A0x7149aba0cb5688b8!2sShopping%20Campo%20Grande!5e0!3m2!1ses-419!2sbr!4v1676779769007!5m2!1ses-419!2sbr"  loading="lazy" width="600" height="450" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
</section>
</template>

<style>
.map-responsive{

overflow:hidden;

padding-bottom:56.25%;

position:relative;

height:0;

}

.map-responsive iframe{

left:0;

top:0;

height:100%;

width:100%;

position:absolute;

}


</style>