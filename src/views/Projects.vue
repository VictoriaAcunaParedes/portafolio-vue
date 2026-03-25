<template>
    <section class="proyectos container my-1" id="proyectos">
            <h2 class="text-center my-5 display-5 fw-bold">Mis proyectos</h2>
            <TransitionGroup
            name="fade-list"
            tag="div"
            class="cards row gap-1 justify-content-evenly"
            >
                <ProjectCard 
                    v-for="(project, index) in projects"
                    v-show="showCards"
                    :key="project.title"
                    v-bind="project"
                    :style="{ transitionDelay: `${index * 150}px` }"
                    class="col-11 col-sm-10 col-md-6 col-xl-4 mb-5"
                />
        </TransitionGroup>
        </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { projects } from '@/data/projects'
    import ProjectCard from '@/components/ProjectCard.vue';

    const showCards = ref(false)

    onMounted(() => {
        setTimeout(() => {
            showCards.value = true
        }, 100)
    })
</script>

<style scoped>
.proyectos {
    padding: 70px;
}

.fade-list-enter-active,
.fade-list-leave-active {
    transition: all 0.6s ease;
}

.fade-list-enter-from,
.fade-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.cards {
    display: flex;
    align-items: stretch;
}
</style>