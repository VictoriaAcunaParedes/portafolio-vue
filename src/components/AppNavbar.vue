<template>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
            <div class="container">
                <router-link to="/" class="navbar-brand col-2">Victoria Acuña</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav ms-auto">
                        <router-link 
                            v-for="link in links"
                            :key="link.name" 
                            :to="link.path"
                            class="nav-link fs-3" 
                        >
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

</template>

<script setup>
const links = [
    {name: 'Hola !', path: '/'},
    {name: 'Sobre mi', path: '/about'},
    {name: 'Proyectos', path: '/projects'},
    {name: 'Contacto', path: '/contact'},
    
]
</script>

<style scoped>
    .router-link-active {
        font-weight: bold;
        border-bottom: 2px solid white;
    }
</style>