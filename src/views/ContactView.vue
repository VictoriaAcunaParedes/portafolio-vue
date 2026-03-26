<template>
    <section class="contact-section py-5" id="contacto">
        <div class="container text-center">
            <h2 class="display-5 fw-bold mb-3">¿Tienes un proyecto en <span class="text-fucsia">mente?</span></h2>
            <p class="lead mb-5 text-secondary">Estoy disponible para nuevas oportunidades y colaboraciones.</p>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>
.text-fucsia {
    color: #FF1493;
}

.contact-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
}
</style>