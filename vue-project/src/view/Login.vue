<template>
    <main class="raiz">
        <section class="raiz-home">
            <div class="form-regis">
                <input class="inputs inputs-regis user" type="text" placeholder="Usuario:" required>
                <input class="inputs inputs-regis pass" type="password" placeholder="Contraseña:" required>
                <button class="btn-fondo" @click="verificarUser()">Enviar</button>
            </div>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Login',
    data(){
        return{
            dataUser:null,
            verificarUser:null
        }
    },
    async mounted() {
        const router = useRouter();
        const user = document.querySelector('.user');
        const pass = document.querySelector('.pass');

        await axios.get(`http://localhost:3000/api/users`)
        .then(response =>  this.dataUser = response.data);

        this.verificarUser = async () => {
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

                for(let i in this.dataUser) {
                    if (this.dataUser[i].nameUser === user.value && this.dataUser[i].pass === pass.value){
                        router.push({
                            path: '/perfil',
                            query: {
                                id:this.dataUser[i].id
                            }
                        });
                        return;
                    }
            
                }
                
                alert("Usuario o contraseña incorrectas");
            }//fin else
        }
    }
})
</script>

<style>
.form-regis {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    gap: 10px 0;
    padding: 5px;
}

.inputs-regis,
.form-regis .btn-fondo,
.span-regis,
.perfil-avatar {
    width: 250px;
    height: 30px;
    padding-left: 5px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-6);
}


.inputs-regis:focus {
    outline: none;
}

.span-regis {
    height: 40px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.num_avatar {
    height: 10px;
}

.form-regis .avatar {
    width: 40px;
    height: 40px;
    position: relative;
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