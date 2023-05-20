<template>
    <header class="cabecera">
        <nav>
            <div>
                <button class="btn" @click="goToHome($event)">LOANDING RPG</button>
            </div>
            <ul class="menu" ref="menu_list">
                <li class="menu-item home active">
                    <button class="btn" @click="goToHome($event)">Home</button>
                </li>
                <li class="menu-item public">
                    <button class="btn" @click="goToPublica()">Publicaciones</button>
                </li>
                <li class="menu-item perfil">
                    <button class="btn" @click="goToPerfil()">Perfil</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Header',
    setup() {
        const router = useRouter();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        // ir a Home
        const goToHome = (event) => {
            router.push({
                path: '/',
                query: {
                    id:id
                }
            });
            const li = event.currentTarget.parentElement;
            li.classList.add('active');
            console.log(event.target.offsetParent.parentNode);
        }

        // ir a publication
        const goToPublica = () => {
            router.push({
                path: '/publicaciones',
                query: {
                    id:id
                }
            })
        }
        const goToPerfil = () => {
            router.push({
                path: '/perfil',
                query: {
                    id:id
                }
            })
        }
        return {
            goToHome,
            goToPublica,
            goToPerfil
        }
    },
    mounted() {
        const tmp = this.$refs.menu_list;
        const btns = tmp.querySelectorAll('li');

        btns.forEach(btn => {
            btn.classList.remove("active");
            console.log(btn);
        });
    }
})
</script>

<style>
.cabecera {
    width: 95%;
    margin: 2% 2%;
    height: 80px;
    color: var(--color-6);
    position: sticky;
    top: 0;
    z-index: 5;
}

.cabecera nav {
    padding: .5rem;
    width: 100%;
    margin-left: 1%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 2px solid var(--color-6);
    box-shadow: 0 0 5px var(--color-6);
    background-color: var(--fondo-dark);
}

nav div {
    width: 25%;
    text-decoration: none;
    color: var(--color-6);
    font-weight: bold;
    cursor: pointer;
}

.menu {
    width: 80%;
    max-width: 350px;
    display: flex;
    justify-content: space-around;
}

.menu-item {
    list-style: none;
    position: relative;
    transition: .25s line transform;
    overflow: hidden;
}

.menu-item::before {
    content: ' ';
    width: 1%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: .45s;
}

.menu-item:hover::before {
    border-bottom: 2px solid;
    transform: scaleX(200);
}

.btn {
    cursor: pointer;
    background-color: var(--fondo-dark);
    border: none;
    color: var(--color-6);
}

@media(max-width:660px) {
    .cabecera nav {
        min-width: 250px;
        min-height: 80px;
        justify-content: center;
    }

    .menu {
        padding: 0;
        width: 100%;
        justify-content: space-between;
    }

    nav div {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }

    nav div .btn {
        font-weight: bold;
    }
}
</style>