<template>
    <div class="form-container shadow-lg">
        <form @submit.prevent="handleSubmit"  class="contact-form">
            <div class="input-group-custom">
                <label>Nombre</label>
                <input type="text" placeholder="¿Cómo te llamas?" required v-model="formData.name">
            </div>
            <div class="input-group-custom">
                <label>Correo Electronico</label>
                <input type="email" placeholder="nombre@ejemplo.com" required v-model="formData.email">
            </div>
            <div class="input-group-custom">
                <label>Mensaje</label>
                <textarea rows="4" placeholder="Cuéntame sobre tu proyecto..." required v-model="formData.message"></textarea>
            </div>
            <button type="submit" class="btn-submit">Enviar Mensaje <i class="bi bi-send-fill ms-2"></i></button>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    const formData = reactive({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = () => {
        console.log('Datos enviados:', formData);
        alert('¡Gracias por escribir!');

        formData.name = '';
        formData.email = '';
        formData.message = ''
    }
</script>

<style scoped>
.form-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2.5rem;
    background:rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 20, 147, 0.2);
    border-radius: 20px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.input-group-custom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-group-custom label {
    color: #FF1493;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

input, textarea {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
    border-radius: 10px;
    padding: 12px 15px;
    color: white;
    transition: all 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #FF1493;
    box-shadow: 0 0 10px rgba(255, 20, 147, 0.2);
    background: rgba(255, 20, 147, 0.05);
}

.btn-submit {
    background-color: #FF1493;
    color: white;
    font-weight: bold;
    padding: 15px;
    border: none;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.btn-submit:hover {
    background-color: #D41279;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 20, 147, 0.4);
}

.btn-submit:active {
    transform: translateY(0);
}
</style>