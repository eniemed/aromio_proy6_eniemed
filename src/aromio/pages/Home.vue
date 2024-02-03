<template>
    <body>
        <section>
            <article>
                <p class="titulo">AROMIO</p>
                <p>Your morning coffee only a click away! Choose your type to wake up with full energy.</p>
                <button>Explore our products</button>
            </article>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th>Flavours</th>
                            <th>Roast levels</th>
                            <th>Grind options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>+ 30</td>
                            <td>5</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <article class="contenedor-foto-home">
                <img id="foto-home" src="../../assets/home-photo.png">
                <div></div>
            </article>
        </section>
        
    </body>
</template>
<script>
    export default {


    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Alata&family=Archivo+Black&display=swap');

    .titulo {
        font-family: 'Archivo Black', sans-serif;

    }

    #foto-home {
    width: auto;
    height: 60vh;
  }

  .contenedor-foto-home {
    margin-left: 50%;
    display: flex;
    margin-top: 8vh;
    margin-left: 158vh;
  }

  div {
    background-color: rgb(230, 222, 219);
  }

</style>