<template>
    <main class="raiz">
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
import { useRouter } from 'vue-router';
import { loandingData } from '../utils/CargarData';

export default defineComponent({
    name: 'Publicacion',
    setup() {

        //const pulicaciones = dataPublic["data"].filter(value => value.id == 1);
        const data = loandingData();
        const router = useRouter();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const dataUser = data["user"][id];
        const dataPublic = data['public'].sort((a, b) => b.id - a.id);

        const showUser = (idUser) => {
            router.push({
                path: '/perfil/user',
                query: {
                    id: id,
                    idUser: idUser
                }
            });
        };
        return {
            dataUser,
            dataPublic,
            showUser
        }
    }
})
</script>

<style>
main {
    width: 96%;
    margin: 2%;
    color: var(--color-6);
}

.raiz-public {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
}

.raiz-public-content {
    display: flex;
    flex-flow: column wrap;
    max-width: 690px;
    margin: 10px 0;
}

.raiz-public-content span {
    padding-left: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

a {
    text-decoration: none;
    color: var(--color-6);
}

a:hover {
    color: var(--color-2);
}

.raiz-public-content span img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    background-color: var(--color-2);
    border-radius: 50%;
    margin-right: 10px;
}

.raiz-public-content_interno {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    color: var(--color-2);
    text-align: justify;
    padding: .2rem;
}

.raiz-public-content_interno iframe {
    width: 100%;
    height: 260px;
}

.raiz-public-content_interno p {
    margin-top: 5px;
    width: 100%;
}

.span-iteracion-user {
    padding: 1% 0;
}

.span-iteracion-user ion-icon {
    font-size: 20px;
    margin-left: 5px;
    font-weight: bold;
}

@media(min-width:661px) {

    .raiz-public-content_interno iframe,
    .raiz-public-content_interno p {
        width: 49%;
    }
}
</style>