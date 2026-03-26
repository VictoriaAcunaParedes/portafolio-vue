<template>
    <footer class="main-footer">
        <div class="container py-5">
            <div class="footer-divider"></div>

            <div class="row align-items-center text-center text-md-start">
                <div class="col-md-6 mb-4 mb-md-0">
                    <h4 class="fw-bold mb-3">Victoria <span class="text-fucsia">Acuña</span></h4>
                    <div class="contact-info">
                        <p><i class="fa-solid fa-envelope text-fucsia me-2"></i> victoria.acuna2709@gmail.com</p>
                        <p><i class="fa-solid fa-location-dot text-fucsia me-2"></i> Villarrica, Chile</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <h5 class="mb-4 text-center text-md-end">Conecta conmigo</h5>
                    <div class="d-flex justify-content-center justify-content-md-end gap-4">
                        <a ref="githubRef" href="https://github.com/VictoriaAcunaParedes" target="_blank" class="social-icon"
                            data-bs-toggle="tooltip" data-bs-title="GitHub">
                            <i class="fa-brands fa-github"></i>
                        </a>

                        <a ref="linkedinRef" href="https://www.linkedin.com/in/victoria-alviento90/" target="_blank" class="social-icon" data-bs-toggle="tooltip"
                            data-bs-title="LinkedIn">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>

                        <a ref="instagramRef" href="https://www.instagram.com/victoria.alviento/" target="_blank" class="social-icon" data-bs-toggle="tooltip"
                            data-bs-title="Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <p class="small text-secondary">@ 2026 Victoria Acuña - Hecho con Vue 3 & 💖</p>
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
.main-footer {
    background-color: #000308;
    color: white;
}

.text-fucsia {
    color: #FF1493;
}

.footer-divider {
    height: 1px;
    width: 100%;
    margin-bottom: 3rem;
    background: linear-gradient(
        to right,
        transparent,
        rgba(255, 20, 147, 0.5),
        transparent
    );
}

.contact-info p {
    color: #b0b0b0;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.contact-info p:hover {
    color: white;
}

.social-icon {
    font-size: 2.2rem;
    color: #d6d3d3;
    transition: all 0.3s ease;
}

.social-icon:hover {
    color: #FF1493;
    transform: translateY(-5px);
    filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.6));
}


</style>