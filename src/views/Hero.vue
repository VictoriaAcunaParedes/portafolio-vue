<template>
    <section class="container hero-section py-5" id="hola">
            <div class="hero-wrap">
                <img :src="victoria" alt="Fotografía de Victoria Acuña, desarrolladora Front-End" class="hero-img">
                <div class="hero-text">
                    <h1>{{ name }}</h1>
                    <h2>{{ role }}</h2>
                    <p>
                        Hola, soy Victoria Acuña, desarrolladora
                        Front-End en formación. <br> Me apasiona
                        crear interfaces simples, accesibles y
                        pensadas para las personas
                    </p>
                </div>
            </div>
        </section>

</template>

<script setup>
    import victoria from '@/assets/img/victoria.jpg'

    const name = 'Victoria Acuña'
    const role = 'Desarrolladora Front-End'
</script>

<style scoped>
.hero-wrap {
    padding-top: 70px;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.hero-img {
    width: 350px;
    height: 450px;
    border: 4px solid #d6c9b6;
    border-radius: 5px;
}

.hero-text h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
}

.hero-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.hero-text p {
    font-size: 1.2rem;
    line-height: 1.6;
    border: 2px solid #4a4b4d;
    border-radius: 12px;
    padding: 1.5rem;
}


@media (max-width: 768px) {
    .hero-wrap {
        flex-direction: column;
        text-align: center;
    }

    .hero-img {
        width: 250px;
        height: auto;
    }
}
</style>