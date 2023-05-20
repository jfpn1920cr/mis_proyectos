<template>
    <main class="raiz">
        <section class="raiz-home">
            <form class="form-public">
                <input class="inputs inputs-regis you" type="url" placeholder="Youtube:" required>
                <textarea class="descripcion-public" type="url" placeholder="Descripción" required></textarea>
                <button class="btn-fondo" @click="guadarPublicacion($event)">Enviar</button>
            </form>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import { loandingData } from '../utils/CargarData.js';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Publicar',
    setup() {
        const router = useRouter();
        const data = loandingData();
        const dataUser = data.user;
        const dataPublic = data.public;
        
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

        const limpiar = (id2) => {
            document.querySelector('.you').value = "";
            document.querySelector('.descripcion-public').value = "";
            
            router.push({
                path: '/publicaciones',
                query: {
                    id:id2
                }
            })

        }

        const guadarPublicacion = (event) => {
            event.preventDefault();
            let size = 0, sizep = 0;
            let flag = false;

            document.querySelectorAll('.inputs').forEach((input) => {
                if (input.value === "") {
                    input.style = "border: 1px solid red";
                    flag = true;
                    return;
                } else input.style = "border: 1px solid var(--color-6)";
            });

            if (flag) {
                alert("Datos incompletos");
            } else {
                
                for (let k in dataUser) {
                    size++;
                }
                

                console.log(dataUser)
                console.log(id)
                const temp = {
                    "id": dataPublic.length,
                    "idUser": id,
                    "user": dataUser[id].nameUser,
                    "avatar": dataUser[id].avatar,
                    "video_url": document.querySelector('.you').value,
                    "descripcion": document.querySelector('.descripcion-public').value
                };

                dataPublic.push(temp);
                const dataTemp = {
                    "user": dataUser,
                    "public": data.public,
                }

                localStorage.setItem("data", JSON.stringify(dataTemp));
                alert("Datos guardados");
                limpiar(`${size + 1}`);

            }//fin else
        }
        return {
            guadarPublicacion
        }
    }
})
</script>

<style>
.form-public {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    gap: 10px 0;
    padding: 5px;
}

.form-public .btn-fondo{
    width: 250px;
    height: 30px;
    padding-left: 5px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-6);
}

.form-public .you {
    width: 100%;
    max-width: 500px;
}
.descripcion-public{
    width: 100%;
    max-width: 500px;
    height: 250px;
    padding-left: 5px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-6);
}

</style>