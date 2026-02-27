<template>
    <div class="card text-bg-dark col-10 col-sm-10 col-md-5 col-lg-3 p-0">
        <img :src="image" class="card-img-top" :alt="`Captura del proyecto ${title}`">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <a  v-if="repo" class="btn btn-primary" :href="repo" target="_blank"> Ver Repositorio</a>

        </div>
        
    </div>
</template>


<script setup>
    defineProps({
        title: String,
        description: String,
        image: String,
        repo: String
    })
</script>


<style scoped>
</style>