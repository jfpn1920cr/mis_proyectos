<template>
    <main class="raiz">
        <section class="raiz-perfil">
            <div class="raiz-perfil-content perfi">
                <img class="avatar" :src="avatar" alt="avatar">
                <h2 class="subtitle">{{ dataUser.nameUser }}</h2>
                <p class="segui">Seguidores: {{ dataUser.seguidores.length }}</p>
                <button @click="seguir()" class="btn-fondo" v-if="flag">Seguir</button>
                <button @click="noSeguir()" class="btn-fondo" v-if="!flag">Siguiendo</button>
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

export default defineComponent({
    name: 'UserIndivual',
    setup() {
        const dataTemp = loandingData();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const idUser = url.searchParams.get("idUser");
        const dataUser = dataTemp["user"][idUser];
        const listSeguidores = dataUser.seguidores;
        
        
        const flag = (listSeguidores.indexOf(id) < - 1);
        const dataPublic = dataTemp["public"].filter(value => value.idUser == idUser);
        const avatar = dataUser.avatar;
        
        const seguir = () =>{
            listSeguidores.push(id);
            dataUser.seguidores = listSeguidores;
            dataTemp["user"][idUser] = dataUser;
            localStorage.setItem("data", JSON.stringify(dataTemp));
            document.querySelector(".segui").innerHTML = "Seguidores: "+listSeguidores.length;
        };

        const noSeguir = () =>{
var index = listSeguidores.indexOf(id);

            listSeguidores.splice(index,1);
            dataUser.seguidores = listSeguidores;
            dataTemp["user"][idUser] = dataUser;
            localStorage.setItem("data", JSON.stringify(dataTemp));
            document.querySelector(".segui").innerHTML = "Seguidores: "+listSeguidores.length;
        }

        return {
            dataUser,
            dataPublic,
            id,
            flag,
            avatar,
            seguir,
            noSeguir
        }
    }
})
</script>

<style></style>