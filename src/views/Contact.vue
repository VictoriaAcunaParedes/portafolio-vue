<template>
    <section class="contact-section py-5">
        <div class="container py-5">
            <h2 class="text-center my-5 display-5 fw-bold">Trabajemos juntos </h2>
            <ContactForm />
        </div>
    </section>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';


</script>

<style scoped>
    .contact-section {
        min-height: 80vh;
    }
</style>