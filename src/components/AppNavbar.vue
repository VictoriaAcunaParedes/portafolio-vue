<template>
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
            <div class="container">
                <router-link to="/" class="navbar-brand fw-bold">
                    <span class="text-fucsia">V</span>ictoria <span class="text-fucsia">A</span>cuña
                </router-link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav ms-auto gap-lg-4">
                        <router-link 
                            v-for="link in links"
                            :key="link.name" 
                            :to="link.path"
                            class="nav-link custom-link" 
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
.custom-navbar {
    background:rgba(0, 3, 8, 0.8) !important;
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 20, 147, 0.1);
    padding: 1rem o;
    transition: all 0.3s ease;
}

.text-fucsia {
    color: #FF1493;
}

.navbar-brand {
    font-size: 1.5rem;
    color: white !important;
    letter-spacing: 1px;
}

.custom-link {
    color: #d6d3d3 !important;
    font-size: 1.1rem;
    position: relative;
    transition: color 0.3s ease;
}

.custom-link:hover {
    color: #FF1493 !important;
}

.navbar-nav .custom-link.router-link-active {
    color: #FF1493 !important;
    font-weight: 600;
}

.navbar-nav .custom-link.router-link-active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #FF1493;
    box-shadow: 0 0 8px #FF1493;
}
</style>