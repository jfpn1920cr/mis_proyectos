<template>
        <PerfilIndividual/>
</template>

<script>
import { defineComponent } from 'vue';
import PerfilIndividual from '../components/perfil-individual/Perfil-individual.vue';

export default defineComponent({
    name: 'UserIndivual',
    components:{
        PerfilIndividual
    }
})
</script>

<style></style>