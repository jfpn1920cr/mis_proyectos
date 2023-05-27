<template>
   <main class="raiz">
        <section class="raiz-sus">
            <div class="raiz-sus_in ">
                <h2 class="subtitle">Mes</h2>
                <ul>
                    <li>
                        Flexibilidad en la elaboración del proyecto o contenido.
                    </li>
                    <li>
                        Renovación Puedes establecer que la suscripción mensual 
                        se renueve automáticamente al final de cada período de 1 mes
                    </li>
                    <li>
                        roporcionar a los desarrolladores una mayor visibilidad 
                        y beneficios adicionales a largo plazo.
                    </li>
                </ul>
                <button @click="showUser()" class="bnt-fondo">Aceptar</button>
            </div>
            <div class="raiz-sus_in">
                <h2 class="subtitle">Premium</h2>
                <ul>
                    <li>
                        Brindar a los desarrolladores premium la oportunidad 
                        de publicar actualizaciones o noticias exclusivas sobre 
                        sus proyectos en la plataforma
                    </li>
                    <li>
                        Destacar los proyectos de los desarrolladores premium 
                        en la página principal de LOADING RPG, dándoles una mayor 
                        visibilidad.
                    </li>
                    <li>
                        Ofrecer soporte prioritario y asesoramiento personalizado 
                        a los desarrolladores premium, brindándoles una atención 
                        más especializada.
                    </li>
                </ul>
                <button @click="showUser()" class="bnt-fondo">Aceptar</button>
            </div>
    </section>
    </main>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Suscripcion',
    async setup() {

        const router = useRouter();
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        if(id === null || id === "") location = "http://localhost:5173/";
       
        const showUser = async () => {
            let dataUser;

            try {
                await axios.get(`http://localhost:3000/api/users/${id}`)
                .then(response =>  dataUser = response.data);
    
                console.table(dataUser)
                dataUser.suscripcion = "SI";
                await axios.put(`http://localhost:3000/api/users/${id}`,dataUser);
                console.table(dataUser)
                
            } catch (error) {
                console.log("Usuario no encontrado");
            }
            
            router.push({
                path: '/perfil',
                query: {
                    id: id
                }
            });
           
        };
        return {
            showUser
        }
    }
})
</script>

<style>
.raiz-sus {
    display: flex;
    flex-flow:row wrap;
    align-items: center;
    gap: 5px;
}

.raiz-sus_in {
    width: 45%;
    padding: 2%;
}

@media(max-width:661px) {

    .raiz-sus_in {
        width: 100%;
    }

    .perfi {
        width: 100%;
        align-items: center;
    }
}
</style>