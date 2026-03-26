<template>
    <div class="card project-card text-bg-dark border-0 col-11 col-md-5 col-lg-3 p-0">
        <div class="img-container">
            <img :src="image" class="card-img-top" :alt="`Captura de ${title}`">
            <div class="overlay d-flex flex-column justify-content-end p-4">
                <p class="small text-center mb-3 description-text text-white">{{ description }}</p>
                <div class="d-flex gap-2 justify-content-center">
                    <a  v-if="repo" class="btn btn-fucsia-outline btn-sm fw-bold" :href="repo" target="_blank">Repo Github</a>
                    <a  v-if="demo" class="btn btn-fucsia btn-sm fw-bold" :href="demo" target="_blank">Ver Demo</a>
                </div>
            </div>
        </div>

        <div class="card-body">
            <h6 class="card-title fw-bold mb-2 text-uppercase">{{ title }}</h6>
            <div class="d-flex flex-wrap gap-1">
                <span v-for="tag in tags" :key="tag" class="badge tech-tag">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>


<script setup>
    defineProps({
        title: String,
        description: String,
        image: String,
        repo: String,
        demo: String,
        tags: Array
    })
</script>


<style scoped>
    .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        border-radius: 12px;
        background-color: #0a0a0a;
        border: 1px solid #222;
    }

    .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(255, 20, 147, 0.25);
        border-color: #FF1493;
    }

    .img-container {
        position: relative;
        overflow: hidden;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background-color: #000;
    }

    .img-container::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 20, 147, 0.2);
        mix-blend-mode: multiply; 
        opacity: 1;
        transition: opacity 0.4s ease;
        pointer-events: none; 
    }

    .card-img-top {
        width: 100%;
        height: auto;
        display: block;
        filter: grayscale(100%) brightness(0.8);
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
                    filter 0.6s ease;
    }

    .project-card:hover .card-img-top {
        transform: scale(1.05);
        filter: grayscale(0%) brightness(1);
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(255, 20, 147, 0.9) 0%,
            rgba(255, 20, 147, 0.6) 30%,
            rgba(0, 0, 0, 0.8) 80%,
            rgba(0, 0, 0, 0.95) 100%
            );
        opacity: 0;
        transition: opacity 0.4s ease;
        backdrop-filter: blur(1.5px);
    }

    .project-card:hover .overlay {
        opacity: 1;
    }

    .description-text {
        line-height: 1.4;
        font-weight: 500;
        transform: translateY(20px);
        transition: transform 0.4s ease;
    }

    .project-card:hover .description-text {
        transform: translateY(0);
    }

    .btn-fucsia {
        background-color: #FF1493;
        color: white;
        border: none;
    }

    .btn-fucsia:hover {
        background-color: #D41279;
        color: white;
    }

    .btn-fucsia-outline {
        background-color: transparent;
        color: white;
        border: 2px solid #FF1493;
    }
    .btn-fucsia-outline:hover {
        background-color: #FF1493;
        color: white;
    }

    .tech-tag {
        font-size: 0.65rem;
        background-color:rgba(255, 20, 147, 0.1);
        color: white;
        border: 1px solid rgba(255, 20, 147, 0.3);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

</style>