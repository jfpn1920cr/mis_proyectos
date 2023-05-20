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
import { defineComponent } from 'vue';
import { loandingData } from '../utils/CargarData.js';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Login',
    setup() {
        const router = useRouter();
        const data = loandingData();
        const dataUser = data.user;
        
        const limpiar = (id) => {
            document.querySelector('.user').value = "";
            document.querySelector('.pass').value = "";
            router.push({
                path: '/perfil',
                query: {
                    id:id
                }
            })
        }

        const verificarUser = () => {
            let size = 0;
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
                let flag = false;

                for (let user in dataUser) {
                    if (dataUser[user].nameUser === document.querySelector(".user").value && dataUser[user].pass === document.querySelector(".pass").value){
                        limpiar(user);
                        return;
                    }
                    console.log(dataUser[user].nameUser)
                    console.log(dataUser[user].pass)
                }
                alert("Usuario o contraseña incorrectas");
            }//fin else
        }
        return {
            verificarUser
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