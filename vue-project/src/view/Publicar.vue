<template>
    <main class="raiz">
        <section class="raiz-home">
            <form class="form-public">
                <p class="subtitle">Formulario para publicaciones</p>
                <input class="inputs inputs-regis you" type="url" placeholder="Youtube:" required>
                <textarea class="descripcion-public" type="url" placeholder="Descripción" required></textarea>
                <button class="btn-fondo" @click="guadarPublicacion($event)">{{ titleButton }}</button>
            </form>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Publicar',
    data(){
        return{
            limpiar:null,
            guadarPublicacion:null,
            dataPublic:null,
            dataUser:null,
            titleButton: "Enviar"
        }
    },
    async mounted() {
        const router = useRouter();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const idPublic = url.searchParams.get("edit");
        const campoYou =  document.querySelector(".you"); 
        const campoDes =  document.querySelector(".descripcion-public"); 

        if(idPublic !== null){
            await axios.get(`http://localhost:3000/api/publics-one/${idPublic}`)
            .then(response => this.dataPublic = response.data);
    
            campoYou.value = this.dataPublic.video_url;
            campoDes.value = this.dataPublic.descripcion;
            this.titleButton = "Actualizar";
        }

        this.guadarPublicacion = async (event) => {
            event.preventDefault();
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
                
                if(this.titleButton === "Actualizar"){

                    this.dataPublic.video_url = campoYou.value;
                    this.dataPublic.descripcion = campoDes.value;
                    
                    await axios.put(`http://localhost:3000/api/publics/${idPublic}`,this.dataPublic);
                    router.push({
                        path: '/perfil',
                        query: {
                            id:id
                        }
                    })
                }else{
                    await axios.get(`http://localhost:3000/api/users/${id}`)
                    .then(response => this.dataUser = response.data);

                    const temp = {
                        "id": '',
                        "idUser": this.dataUser.id,
                        "user": this.dataUser.nameUser,
                        "avatar": this.dataUser.avatar,
                        "video_url": campoYou.value,
                        "descripcion": campoDes.value
                    };
                    
                    await axios.post(`http://localhost:3000/api/publics`,temp);
                    router.push({
                        path: '/publicaciones',
                        query: {
                            id:id
                        }
                    })
                   
                }// Fin else

            }//fin else
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