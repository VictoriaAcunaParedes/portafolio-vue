<template>
    <section class="container hero-section py-5" id="hola">
            <div class="hero-wrap">
                <div class="img-wrapper">
                    <img :src="victoria" alt="Fotografía de Victoria Acuña, desarrolladora Front-End" class="hero-img">
                </div>
                <div class="hero-text">
                    <h1 class="display-title">Hola, soy <span class="text-fucsia">{{ name }}</span></h1>
                    <h2 class="role-title">
                        <span>{{ currentText }}</span>
                        <span class="type-cursor" :class="{ 'is-typing': !isDoneText }">|</span>
                    </h2>
                    <div class="bio-box">
                        <p> 
                            Me especializo en transformar ideas complejas en interfaces <strong>intuitivas</strong> y <strong>accesibles</strong>. 
                            Creo firmemente que un buen código nace de la <strong>empatía</strong> con el usuario y la atención al detalle.           
                        </p>
                    </div>
                </div>
            </div>
        </section>

</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import victoria from '@/assets/img/victoria.jpg'

    const name = 'Victoria Acuña'
    const fullRole = 'Desarrolladora Front-End'

    const currentText = ref('')
    const isDoneText = ref(false)

    const typeText = () => {
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < fullRole.length) {
                currentText.value += fullRole.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                isDoneText.value = true;
            }
        }, 100);
    };

    onMounted(() => {
        setTimeout(typeText, 500)
    })
</script>

<style scoped>
.hero-section {
    min-height: 90vh;
    display: flex;
    align-items: center;
}

.hero-wrap {
    display: flex;
    align-items: center;
    gap: 4rem;
    width: 100%;
}

.img-wrapper {
    position: relative;
}

.hero-img {
    width: 320px;
    height: 420px;
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid rgba(255, 20, 147, 0.5);
    box-shadow: 15px 15px 0px rgba(255, 20, 147, 0.2);
    transition: all 0.4s ease;
}

.hero-img:hover {
    transform: translate(-5px, -5px);
    box-shadow: 20px 20px 0px rgba(255, 20, 147, 0.4);
}

.text-fucsia {
    color: #FF1493;
    text-shadow: 0 0 10px rgba(255, 20, 147, 0.3);
}

.display-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #fff;
}

.role-title {
    font-size: 2rem;
    font-weight: 400;
    color: #a0a0a0; 
    margin-bottom: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 2.5rem;
}

.type-cursor {
    display: inline-block;
    color: #FF1493;
    font-weight: 800;
    margin-left: 2px;
    opacity: 0;
}

.type-cursor.is-typing {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1;}
    50% {opacity: 0;}
}

.bio-box {
    background: rgba(255, 255, 255, 0.03); 
    backdrop-filter: blur(10px);
    border-left: 4px solid #FF1493;
    padding: 1.5rem 2rem;
    border-radius: 0 15px 15px 0;
    max-width: 600px;
}

.bio-box p {
    font-size: 1.25rem;
    line-height: 1.7;
    margin: 0;
    color: #d6d3d3;
}

.bio-box strong {
    color: #fff;
    font-weight: 600;
}

/* RESPONSIVIDAD */
@media (max-width: 992px) {
    .hero-wrap {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    .display-title { font-size: 3rem; }
    
    .bio-box {
        border-left: none;
        border-top: 4px solid #FF1493;
        border-radius: 0 0 15px 15px;
    }
    
    .hero-img {
        width: 280px;
        height: 350px;
    }

    .role-title {
        justify-content: center;
    }
}
</style>

