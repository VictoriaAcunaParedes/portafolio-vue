<template>
    <footer class="contacto bg-dark text-white py-3" id="contacto">
        <div class="container py-5">
            <hr class="footer-divider">

            <div class="row justify-content-evenly justify-content-md-between py-5">
                <div class="col-10 col-sm-10 col-md-6 mb-5 mb-md-0">
                    <p class="fs-4 fw-bold">Victoria Acuña</p>
                    <p><i class="fa-solid fa-phone"></i> +569 92138616</p>
                    <p><i class="fa-solid fa-envelope"></i> victoria.acuna2709@gmail.com</p>
                    <p><i class="fa-solid fa-location-dot"></i> Villarrica, Chile</p>
                </div>

                <div class="col-10 col-sm-10 col-md-6 mb-5 mb-md-0">
                    <h5 class="mb-5 fs-2 text-center">Conoce un poco mas de mi</h5>
                    <div class="d-flex justify-content-center gap-5">
                        <a ref="githubRef" href="https://github.com/VictoriaAcunaParedes" target="_blank" class="social-link"
                            data-bs-toggle="tooltip" data-bs-title="GitHub">
                            <i class="fa-brands fa-square-github fa-3x"></i>
                        </a>

                        <a ref="linkedinRef" href="https://www.linkedin.com/in/victoria-alviento90/" target="_blank" class="social-link" data-bs-toggle="tooltip"
                            data-bs-title="LinkedIn">
                            <i class="fa-brands fa-linkedin fa-3x"></i>
                        </a>

                        <a ref="instagramRef" href="https://www.instagram.com/victoria.alviento/" target="_blank" class="social-link" data-bs-toggle="tooltip"
                            data-bs-title="Instagram">
                            <i class="fa-brands fa-instagram fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Tooltip } from 'bootstrap'

const githubRef = ref(null)
const linkedinRef = ref(null)
const instagramRef = ref(null)

onMounted(() => {
    new Tooltip(githubRef.value)
    new Tooltip(linkedinRef.value)
    new Tooltip(instagramRef.value)
})
</script>

<style scoped>


.footer-divider {
    border: none;
    height: 2px;
    width: 60%;
    margin: 4rem auto;
    background: linear-gradient(
        to right,
        transparent,
        #d6c9b6,
        transparent
    );
}

.social-link {
    color: #d6d3d3;
    transition: transform 0.3s ease, color 0.3s ease;
}

.social-link:hover {
    color: #d6c9b6;
    transform: scale(1.2);
}


</style>