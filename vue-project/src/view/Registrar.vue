<template>
    <main class="raiz">
        <section class="raiz-home">
            <div class="form-regis">
                <input class="inputs inputs-regis nombre" type="text" placeholder="Nombre:" required>
                <input class="inputs inputs-regis user" type="text" placeholder="Usuario:" required>
                <input class="inputs inputs-regis pass" type="password" placeholder="Contraseña:" required>
                <input class="inputs inputs-regis pass_r" type="password" placeholder="Confirmar Contraseña:" required>
                <input class="inputs inputs-regis face" type="url" placeholder="Facebook:" required>
                <input class="inputs inputs-regis you" type="url" placeholder="Youtube:" required>
                <input class="inputs inputs-regis tw" type="url" placeholder="Twitch:" required>
                <textarea class="inputs inputs-regis descripcion" type="url" placeholder="Descripción" required></textarea>
                <span class="span-regis">
                    <img class="avatar" src="../assets/avatar/avatar-1.png" alt="avatar">
                    <img class="avatar" src="../assets/avatar/avatar-2.png" alt="avatar">
                    <img class="avatar" src="../assets/avatar/avatar-3.png" alt="avatar">
                    <img class="avatar" src="../assets/avatar/avatar-4.png" alt="avatar">
                </span>
                <span class="span-regis num_avatar">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </span>
                <select class="perfil-avatar" id="avatar">
                    <option value="/src/assets/avatar/avatar-1.png">Avatar 1</option>
                    <option value="/src/assets/avatar/avatar-2.png">Avatar 2</option>
                    <option value="/src/assets/avatar/avatar-3.png">Avatar 3</option>
                    <option value="/src/assets/avatar/avatar-4.png4">Avatar 4</option>
                </select>
                <button class="btn-fondo" @click="guadarUser()">Enviar</button>
            </div>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import { loandingData } from '../utils/CargarData.js';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Registrar',
    setup() {
        const inputs = document.querySelectorAll('.inputs');
        const router = useRouter();
        const data = loandingData();
        const dataUser = data.user;
        
        const limpiar = (id) => {
            document.querySelector('.nombre').value = "";
            document.querySelector('.user').value = "";
            document.querySelector('.pass').value = "";
            document.querySelector('.pass_r').value = "";
            document.querySelector('.you').value = "";
            document.querySelector('.tw').value = "";
            document.querySelector('.face').value = "";
            document.querySelector('.descripcion').value = "";
            router.push({
                path: '/perfil',
                query: {
                    id:id
                }
            })
        }

        const guadarUser = () => {
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

                if (document.querySelector(".pass").value === document.querySelector(".pass_r").value) {
                    
                    document.querySelector(".pass").style = "border: 1px solid green";
                    document.querySelector(".pass_r").style = "border: 1px solid green";
                    
                    for (let k in dataUser) {
                        size++;
                    }

                    const temp = {
                        "name": document.querySelector('.nombre').value,
                        "nameUser": document.querySelector('.user').value,
                        "pass": document.querySelector('.pass').value,
                        "you": document.querySelector('.you').value,
                        "tw": document.querySelector('.tw').value,
                        "fc": document.querySelector('.face').value,
                        "avatar": document.querySelector('.perfil-avatar').value,
                        "descripcion": document.querySelector('.descripcion').value,
                        "seguidores": 0,
                        "suscriptor": "NO"
                    };

                    dataUser[`${size + 1}`] = temp
                    const dataTemp = {
                        "user": dataUser,
                        "public": data.public,
                    }

                    localStorage.setItem("data", JSON.stringify(dataTemp));
                    alert("Datos guardados");
                    limpiar(`${size + 1}`);

                } else {
                    document.querySelector(".pass").style = "border: 1px solid red";
                    document.querySelector(".pass_r").style = "border: 1px solid red";
                    alert("Las contraseñas no coinciden");
                }//fin else
            }//fin else
        }
        return {
            guadarUser
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

.descripcion {
    max-width: 100%;
    resize: none;
    min-height: 80px;
    max-height: 90px;
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