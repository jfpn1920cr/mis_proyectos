<template>
    <main class="raiz">
        <section class="raiz-perfil">
            <div class="raiz-perfil-content perfi">
                <img class="avatar" :src="avatar" alt="avatar">
                <h2 class="subtitle">{{ dataUser.nameUser }}</h2>
                <p>Seguidores: {{ dataUser.seguidores.length }}</p>
                <button class="btn-fondo" @click="toPublici()" v-if="flag">Publicar</button>
                <button class="btn-fondo" @click="toSuscri()" v-if="!flag">Suscribirse</button>
                <span class="redes">
                    <a class="link" :href="dataUser.fc">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a class="link" :href="dataUser.you">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                    <a class="link" :href="dataUser.tw">
                        <ion-icon name="logo-twitch"></ion-icon>
                    </a>
                </span>
            </div>
            <div class="raiz-perfil-content bibliografia">
                <p class="">{{ dataUser.descripcion }}</p>
            </div>
        </section>
        <section class="raiz-public" v-for="publicacion in dataPublic" :key="publicacion.id">
        <div class="raiz-public-content">
            <span>
                <img :src="publicacion.avatar" alt="Avatar">
                <button class="btn" @click="showUser(publicacion.idUser)">{{ publicacion.user }}</button>
            </span>
            <div class="raiz-public-content_interno">
                <iframe :src="publicacion.video_url" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <p>{{ publicacion.descripcion }}</p>
            </div>
        </div>
    </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import { loandingData } from '../utils/CargarData.js';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: 'Perfil',
    setup() {
        const data = loandingData();
        const router = useRouter();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        console.log(data)
        const dataUser = data["user"][id];
        console.log(dataUser)
        const flag = dataUser.suscriptor !== "NO";

        const dataPublic = data["public"].filter(value => value.idUser == id).sort((a,b)=> b.id - a.id);
        const avatar = dataUser.avatar;

        const toSuscri = ()=>{
            router.push({
                path: '/suscripcion',
                query: {
                    id: id,
                }
            });
        } 
        const toPublici = ()=>{
            router.push({
                path: '/publicar',
                query: {
                    id: id,
                }
            });
        } 

        return {
            dataPublic,
            dataUser,
            avatar,
            flag,
            toSuscri,
            toPublici
        }
    }
})
</script>

<style>
.raiz-perfil {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.perfi {
    align-items: center;
}

.perfi  p{
    margin: 10px 0;
}

.raiz-perfil-content {
    display: flex;
    flex-flow: column wrap;
    width: 30%;
    max-width: 690px;
    margin: 10px 0;
}

.raiz-perfil-content span {
    padding-left: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.avatar {
    width: 150px;
    margin: 10px 0;
    background-color: var(--color-2);
    border-radius: 50%;
    padding: 1px;
    object-fit: cover;
}

.redes {
    display: flex;
    justify-content: space-between;
    width: 120px;
    margin: 5px 0;
    font-size: 1.5rem;
}

.bibliografia {
    padding: .5rem;
    width: 60%;
}

@media(max-width:661px) {

    .bibliografia {
        width: 100%;
    }

    .perfi {
        width: 100%;
        align-items: center;
    }
}
</style>