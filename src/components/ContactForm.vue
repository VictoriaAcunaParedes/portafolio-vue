<template>
    <div class="my-5">
        <form class="contact-form">
            <label>Nombre:</label>
            <input type="text" placeholder="Tu nombre" required>
            <label>Correo:</label>
            <input type="email" placeholder="Tu correo" required>
            <label>Mensaje:</label>
            <textarea placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>

</template>

<script setup></script>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: auto;
}

.contact-form button {
    background-color: #000308;
    color: #d6d3d3;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 6px;
}
</style>