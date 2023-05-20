<template>
    <main class="raiz">
        <section class="raiz-home">
            <img class="logo" src="../assets/img/logo.png" alt="">

            <div class="raiz-home-content_interno">
                <h2>Bienvenido a Loanding RPG </h2>
                <button class="btn-fondo" @click="goToLogin($event)">Ingresar</button>
                <button class="btn-fondo" @click="goToRegistrar($event)">Registrar</button>
            </div>
        </section>
        <section class="raiz-home">
            <div class="raiz-home-content_interno">
                <img class="logo" src="../assets/img/nosotros.png" alt="Nostros imagenes">
                <button class="btn-fondo btn-in" @click="goToNostros($event)">Nostros</button>
            </div>
            <div class="raiz-home-content_interno">
                <img class="logo" src="../assets/img/importante.png" alt="Nostros imagenes">
                <button class="btn-fondo btn-in" @click="goToImportante($event)">Importente</button>
            </div>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Home',
    setup() {
      //  const pulicaciones = dataPublic["data"].filter(value => value.id == 1);
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const router = useRouter();
        // ir a Nostros
        const goToNostros = (event) => {
            router.push({
                path: '/nosotros',
                query: {
                    id: id
                }
            });
        }

        // ir a Importante
        const goToImportante = (event) => {
            router.push({
                path: '/importante',
                query: {
                    id: id
                }
            });
        }

        // ir a Login
        const goToLogin = (event) => {
            router.push({
                path: '/login'
            });
        }

        const goToRegistrar = (event) => {
            router.push({
                path: '/registrar'
            });
        }

        return {
            goToNostros,
            goToImportante,
            goToLogin,
            goToRegistrar
        }
    }
})
</script>

<style>
.btn-fondo {
    padding: .2rem 1rem;
    color: var(--fondo-dark);
    font-weight: bold;
    cursor: pointer;
}

.raiz .logo {
    width: 40%;
}

.raiz-home {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
}

.raiz-home-content_interno {
    width: 45%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}

.raiz-home-content_interno h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

.raiz-home-content {
    display: flex;
    flex-flow: column wrap;
    max-width: 690px;
    margin: 10px 0;
}

@media(max-width:661px) {

    .raiz-home-content_interno {
        width: 100%;
        margin-top: 20px;
        text-align: center;
    }

    .btn-in {
        width: 50%;
    }
}
</style>