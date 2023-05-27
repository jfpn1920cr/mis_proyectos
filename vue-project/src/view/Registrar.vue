<template>
    <main class="raiz">
        <section class="raiz-home">
            <form class="form-regis">
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
                    <option value="/src/assets/avatar/avatar-4.png">Avatar 4</option>
                </select>
                <button class="btn-fondo" @click="guadarUser($event)">{{ titleButton }}</button>
            </form>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Registrar',
    data(){
        return {
            dataUser:null,
            titleButton:"Enviar",
            guadarUser:null
        }
    },
    async mounted() {
        const inputs = document.querySelectorAll('.inputs');
        const router = useRouter();
        const nombre = document.querySelector('.nombre');
        const user = document.querySelector('.user');
        const pass = document.querySelector('.pass');
        const pass_r = document.querySelector('.pass_r');
        const you = document.querySelector('.you');
        const tw = document.querySelector('.tw');
        const face = document.querySelector('.face');
        const des = document.querySelector('.descripcion');
        const avatar = document.querySelector('.perfil-avatar');
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

       if(id !== null){
            await axios.get("http://localhost:3000/api/users/"+id)
            .then(response => this.dataUser = response.data);
            pass.value = this.dataUser.pass;
            pass_r.value = this.dataUser.pass;
            nombre.value = this.dataUser.name;
            user.value = this.dataUser.nameUser;
            you.value = this.dataUser.you;
            tw.value = this.dataUser.tw;
            face.value = this.dataUser.fc;
            des.value = this.dataUser.descripcion;
            avatar.value = this.dataUser.avatar;
            this.titleButton = "Actualizar";

       }

        this.guadarUser = async (event) => {
            event.preventDefault();
            let flag = false;

            inputs.forEach((input) => {
                if (input.value === "") {
                    input.style = "border: 1px solid red";
                    flag = true;
                    return;
                } else input.style = "border: 1px solid var(--color-6)";
            });

            if (flag) {
                alert("Datos incompletos");
            } else {

            if (pass.value === pass_r.value) {
                pass.style = "border: 1px solid green";
                pass_r.style = "border: 1px solid green";

                if(this.titleButton === "Actualizar"){
                    this.dataUser.nombre = nombre.value;
                    this.dataUser.nameUser = user.value;
                    this.dataUser.pass = pass.value;
                    this.dataUser.you = you.value;
                    this.dataUser.fc = face.value;
                    this.dataUser.tw = tw.value;
                    this.dataUser.avatar = avatar.value;
                    this.dataUser.avatar = avatar.value;
                    this.dataUser.descripcion = des.value;  
                    
                    await axios.put(`http://localhost:3000/api/users/${id}`,this.dataUser);
                    
                    await axios.get(`http://localhost:3000/api/publics`)
                    .then(async (response) => {
                            const dataPublics = response.data;
                            for(let p in dataPublics){
                                if( dataPublics[p].idUser === id){
                                    dataPublics[p].user = this.dataUser.nameUser;
                                    dataPublics[p].avatar = this.dataUser.avatar;
                                    await axios.put(`http://localhost:3000/api/publics/${p}`,dataPublics[p]);
                                }
                            }
                        
                    });
                }else{

                    let datauser, size = 0;

                    await axios.get(`http://localhost:3000/api/users`)
                    .then(response => datauser = response.data);

                    
                    for(let value in datauser){
                        size ++;
                    }

                    const temp = {
                        "id": `${size+1}`,
                        "name": nombre.value,
                        "nameUser": user.value,
                        "pass": pass.value,
                        "you": you.value,
                        "tw": tw.value,
                        "fc": face.value,
                        "avatar": avatar.value,
                        "descripcion":des.value,
                        "seguidores": [],
                        "suscriptor": "NO"
                    };
    
                    await axios.post("http://localhost:3000/api/users",temp);
    
                }

                router.push({
                path: '/perfil',
                query: {
                    id:id
                }
            })
            } else {
                document.querySelector(".pass").style = "border: 1px solid red";
                document.querySelector(".pass_r").style = "border: 1px solid red";
                alert("Las contraseñas no coinciden");
            }//fin else


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