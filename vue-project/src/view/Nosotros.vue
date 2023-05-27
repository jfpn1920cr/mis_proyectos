<template>
    <main class="raiz">
        <section class="raiz-nosotros">
            <img class="logo" src="../assets/img/nosotros.png" alt="nostros">
            <h2 class="subtitle">¿Quiénes somos?</h2>
            <p class="texto">
                En LOADING RPG, nos apasiona la industria de los videojuegos y creemos
                en el poder de conectar a los desarrolladores con su audiencia. Somos una
                plataforma dedicada a promover y dar visibilidad a los proyectos de
                videojuegos de todos los tamaños y géneros.
                <br>
                Nuestro objetivo principal es proporcionar un espacio accesible y dinámico
                donde los desarrolladores puedan mostrar su creatividad, talento y esfuerzo.
                <br>
                Creemos en la diversidad y la innovación, y nos enorgullece ser un motor para
                el crecimiento y el reconocimiento de nuevos talentos en la industria del gaming.
                <br>
                <br>
                Nos esforzamos por ofrecer una experiencia única tanto para los desarrolladores
                como para los jugadores. Conectamos a los desarrolladores con una audiencia
                apasionada y curiosa, brindando una plataforma donde puedan compartir sus
                proyectos, recibir comentarios valiosos y establecer conexiones significativas
                con la comunidad de jugadores.
                <br>
                Valoramos la calidad, la transparencia y la colaboración. Nos esforzamos por
                ser un socio confiable para los desarrolladores, brindándoles herramientas
                efectivas de promoción y visibilidad. Además, nos comprometemos a ofrecer a
                los jugadores una experiencia enriquecedora, facilitando la exploración de
                nuevos juegos y el descubrimiento de talentos emergentes.
                <br>
                En LOADING RPG, creemos que la pasión por los videojuegos debe ser celebrada
                y compartida. Estamos emocionados de formar parte de esta emocionante industria
                y esperamos ser tu plataforma preferida para descubrir y conectar con los
                proyectos más emocionantes de la escena del gaming.
            </p>
            <h2 class="subtitle">Objetivos</h2>
            <ol class="list-nosotros">
                <li class="items-nosotros">
                    <strong>Proporcionar una plataforma robusta y fácil de usar:</strong>
                    <br>
                    <p class="texto">
                        Uno de los objetivos de LOADING RPG podría ser ofrecer una plataforma
                        en línea intuitiva y amigable para los desarrolladores de videojuegos.
                        Esto implica desarrollar una interfaz de usuario sencilla y una
                        experiencia de navegación fluida que permita a los desarrolladores
                        cargar y promocionar fácilmente sus proyectos.
                    </p>
                </li>
                <li class="items-nosotros">
                    <strong>Facilita la conexión entre desarrolladores y jugadores:</strong>
                    <br>
                    <p class="texto">
                        LOADING RPG crea un puente entre los desarrolladores de videojuegos y
                        los jugadores ávidos de nuevas experiencias de juego. Al proporcionar
                        una plataforma centralizada, facilita la interacción y colaboración
                        entre ambas partes. Los jugadores pueden descubrir nuevos proyectos
                        emocionantes y conectarse directamente con los desarrolladores para
                        obtener más información, proporcionar comentarios o incluso participar
                        en pruebas beta.
                    </p>
                </li>
                <li class="items-nosotros">
                    <strong>Genera oportunidades de negocio y colaboración:</strong>
                    <br>
                    <p class="texto">
                        LOADING RPG puede abrir puertas a nuevas oportunidades de negocio y
                        colaboración para los desarrolladores. Al conectarlos con una audiencia
                        más amplia y potenciales inversores, editores o socios comerciales,
                        se pueden establecer conexiones que impulsen el crecimiento de sus
                        proyectos. Esto puede incluir acuerdos de publicación, financiamiento
                        adicional o colaboraciones estratégicas que beneficien a ambas partes
                        involucradas.
                    </p>
                </li>
                <li class="items-nosotros">
                    <strong>Contribuye al crecimiento de la industria del gaming:</strong>
                    <br>
                    <p class="texto">
                        Al promover la promoción y visibilidad de los proyectos de videojuegos,
                        LOADING RPG contribuye al crecimiento general de la industria del gaming.
                        Al impulsar el reconocimiento de los desarrolladores y sus juegos,
                        se crea un ecosistema más fuerte y vibrante que fomenta la innovación,
                        la competencia saludable y el éxito económico en el sector.
                    </p>
                </li>
            </ol>
            <h2 class="subtitle">Visión Y Misión</h2>
            <p class="texto">
                <Strong>Visión:</Strong>
                <br>
                <br>
                Nuestra misión en LOADING RPG es brindar una plataforma dinámica y accesible 
                para que los desarrolladores de videojuegos promocionen y den a conocer sus 
                proyectos. Nos esforzamos por conectar a los desarrolladores con una amplia 
                audiencia de entusiastas de los videojuegos, proporcionándoles un espacio 
                para exhibir su creatividad, talento y esfuerzo. Buscamos impulsar el crecimiento 
                y la visibilidad de la industria del gaming al ofrecer una experiencia atractiva 
                y valiosa tanto para los desarrolladores como para los visitantes de nuestra 
                plataforma.
                <br>
                <br>
                <Strong>Misión:</Strong>
                <br>
                <br>
                Nuestra visión en LOADING RPG es convertirnos en la plataforma de referencia 
                para la promoción de proyectos de videojuegos, reconocida por su excelencia, 
                innovación y compromiso con la comunidad de desarrolladores y jugadores. Nos 
                esforzamos por fomentar el descubrimiento de nuevos talentos y el éxito de los 
                desarrolladores emergentes, al tiempo que brindamos a los jugadores acceso a 
                una amplia gama de experiencias de juego emocionantes y únicas. Nos visualizamos 
                como un impulsor clave en la evolución de la industria del gaming, conectando a 
                personas apasionadas de todo el mundo y generando oportunidades de colaboración 
                y crecimiento para todos los involucrados
            </p>
        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nosotros',

});
</script>

<style>
.raiz-nosotros {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-items: start;
    margin-bottom: 20px;
}

.raiz-nosotros .logo {
    align-self: center;
    margin-bottom: 20px;
}

.subtitle {
    margin-left: 1rem;
    border-left: 4px solid var(--color-6);
    padding-left: 5px;
    font-weight: bold;
    font-size: 1.2rem;
}

.texto {
    padding: 1rem;
    color: var(--color-2);
    text-align: justify;
}

.texto strong{
    font-weight: bold;
}
.list-nosotros {
    margin-top: 20px;
}

.items-nosotros strong {
    color: var(--color-2);
    font-weight: bold;
}
</style>
