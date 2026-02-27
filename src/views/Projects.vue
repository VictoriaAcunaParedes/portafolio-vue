<template>
    <section class="proyectos container my-1" id="proyectos">
            <h2 class="text-center my-5 display-5 fw-bold">Mis proyectos</h2>
            <div class="cards row gap-5 justify-content-evenly">
                <ProjectCard 
                    v-for="project in projects"
                    :key="project.title"
                    v-bind="project"
                />
            </div>
        </section>
</template>

<script setup>
    import { projects } from '@/data/projects'
    import ProjectCard from '@/components/ProjectCard.vue';
</script>

<style scoped>
.proyectos {
    padding: 70px;
}
</style>