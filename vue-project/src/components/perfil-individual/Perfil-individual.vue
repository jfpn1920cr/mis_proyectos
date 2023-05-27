<template>
    <main class="raiz">
        <section class="raiz-perfil">
            <div class="raiz-perfil-content perfi">
                <img class="avatar" :src="avatar" alt="avatar">
                <h2 class="subtitle">{{ dataUser.nameUser }}</h2>
                <p class="segui" >Seguidores: {{ conteo }}</p>
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
import axios from "axios";

export default defineComponent({
    name: 'Perfil-individual',
    data() {
  return {
        conteo: 0,
        flag: false,
        dataUser:{}, 
        dataPublic:[], 
        listSeguidore: [], 
        avatar :'',
        seguir:null,
        noSeguir:null,
    }
    },
    async mounted() {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const idUser = url.searchParams.get("idUser");
        if(id === null || id === "") location = "http://localhost:5173/";
        if(idUser === id) location = "http://localhost:5173/perfil?id="+id;

        await axios.get("http://localhost:3000/api/users/"+idUser)
        .then(response => this.conteo = response.data.seguidores.length)

        this.seguir = async () => {
            this.listSeguidores.push(id);
            this.dataUser.seguidores = this.listSeguidores;
            await axios.put(`http://localhost:3000/api/users/${idUser}`, this.dataUser);
            this.conteo = this.listSeguidores.length;
            this.flag = !this.flag;
        };

        this.noSeguir = async () =>{
                var index = this.listSeguidores.indexOf(id);
                this.listSeguidores.splice(index,1);
                this.dataUser.seguidores = this.listSeguidores;
                await axios.put(`http://localhost:3000/api/users/${idUser}`,this.dataUser);
                this.conteo = this.listSeguidores.length;
                this.flag = !this.flag;
        }

        await axios
            .get(`http://localhost:3000/api/publics/${idUser}`)
            .then((response) => {
                this.dataPublic = response.data;
            })
            .catch((error) => {
                console.log(error);
            });

        await axios
            .get(`http://localhost:3000/api/users/${idUser}`)
            .then((response) => {
                this.dataUser = response.data;
                this.listSeguidores = this.dataUser.seguidores;
                this.flag = (this.listSeguidores.indexOf(id) === -1);
                this.avatar = this.dataUser.avatar;
            })
            .catch((error) => {
                console.log(error);
            });
    }
})
</script>

<style></style>