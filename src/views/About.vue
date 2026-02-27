<template>
    <section class="about" id="sobre-mi">
        <div class="container">
            <h2 class="text-center mb-5 display-5 fw-bold">Un poco sobre Mi</h2>
            <div class="about-text">
                <p>
                    Soy Victoria Acuña, desarrolladora Front-End en formación,
                    construyendo mi camino en la industria TI con curiosidad y
                    determinación.
                </p>
                <p>
                    Trabajo con HTML, CSS, JavaScript, Bootstrap y Vue.
                    Me interesa crear interfaces accesibles, claras y pensadas
                    para las personas. Actualmente también estoy aprendiendo
                    principios de diseño UX.
                </p>
            </div>

            <div class="skills mt-5">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="skill-item"
                >
                    <i :class="[skill.icon, 'fa-3x']"></i>
                    <span>{{ skill.name }}</span>
                </div>
            </div>
        </div>    
    </section>
</template>

<script setup>
const skills = [
    {name: 'HTML5', icon: ['fa-brands fa-html5']},
    {name: 'CSS3', icon: ['fa-brands fa-css3-alt']},
    {name: 'JavaScript', icon: ['fa-brands fa-js']},
    {name: 'Bootstrap', icon: ['fa-brands fa-bootstrap']},
    {name: 'Vue 3', icon: ['fa-brands fa-vuejs']},
    
]

</script>

<style scoped>
.about {
    position: relative;
    padding: 100px 20px;
    background-image: url('/img/dark-back.jpg');
    background-size: cover;
    background-position: center;
    color: white;
}

.about::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
}

.about > .container {
    position: relative;
    z-index: 1;
}

.about-text {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.7;
}

.skills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-5px);
}

@media (min-width: 992px) {
    .about {
        padding: 120px;
    }
}
</style>