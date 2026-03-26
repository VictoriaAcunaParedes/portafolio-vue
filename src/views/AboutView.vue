<template>
    <section class="about-section py-5" id="sobre-mi">
        <div class="container">
            <h2 class="text-center mb-5 display-5 fw-bold">Un poco <span class="text-fucsia">sobre mí</span></h2>
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                    <div class="about-content">
                        <p class="lead-text">
                            Soy <strong>Victoria Acuña</strong>, una desarrolladora enfocada en el ecosistema
                            Front-End. Mi camino en la tecnología está impulsado por la curiosidad y la
                            constante búsqueda de crear soluciones que unan la <strong>estética</strong> con la <strong>funcionalidad</strong>.
                        </p>
                        <p class="sub-text">
                            Actualmente, estoy perfeccionando mis habilidades en el desarrollo con
                            <strong>Vue.js</strong> y explorando el mundo del <strong>diseño UX/UI</strong>
                            para asegurar que cada interfaz no solo sea visualmente atractiva, sino también
                            accesible y fácil de usar para todas las personas.
                        </p>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skills-glass-card">
                        <h4 class="text-center mb-4 small-title">Tech Stack</h4>
                        <div class="skills-grid">
                            <div
                                v-for="skill in skills"
                                :key="skill.name"
                                class="skill-box"
                            >
                                <i :class="[skill.icon, 'skill-icon']"></i>
                                <span>{{ skill.name }}</span>
                            </div>
                        </div>
                    </div>
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
    {name: 'Firebase', icon: ['fa-solid fa-fire']},
    {name: 'GitHub', icon: ['fa-brands fa-github']},
    {name: 'UX/UI', icon: ['fa-solid fa-pen-nib']},
]

</script>

<style scoped>
.about-section {
min-height: 70vh;
display: flex;
align-items: center;
}

.text-fucsia {
    color: #FF1493;
}

.about-content {
    padding-right: 20px;
}

.lead-text {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #fff;
    margin-bottom: 1.5rem;
}

.sub-text {
    font-size: 1.1rem;
    color: #b0b0b0;
    line-height: 1.8;
}

.skills-glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 20, 147, 0.15);
    border-radius: 24px;
    padding: 2rem;
    position: relative;
}

.small-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    color: #FF1493;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1.5rem;
}

.skill-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
}

.skill-icon {
    font-size: 2.5rem;
    transition: all 0.3s ease;
}

.skill-box span {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
}

.skill-box:hover {
    color: #FF1493;
    transform: translateY(-5px);
}

.skill-box:hover .skill-icon {
    filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6));
}

@media (min-width: 992px) {
    .about-content {
        text-align: center;
        padding-right: 0;
    }

    .skills-glass-card {
        margin-top: 2rem;
    }
}
</style>