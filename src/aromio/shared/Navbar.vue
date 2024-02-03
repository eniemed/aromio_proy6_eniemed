<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/"><a href="#"><img src="../../assets/logo.png"></a></router-link>
                </li>
            </ul>
                
                
            <ul id="links">
                <router-link to="/"><li><a href="#">Home</a></li></router-link>
                <router-link to="/shop"><li><a href="#">Shop</a></li></router-link>
                <router-link to="/wishlist"><li><a href="#">Wishlist</a></li></router-link>
                <router-link to="/contact"><li><a href="#">Contact</a></li></router-link>
            </ul>

            <ul id="auth">
                <router-link to="/login"><li><a href="#">Log in</a></li></router-link>
                <router-link to="/signup"><li><button class="btn-marron">Sign up</button></li></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
     
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Alata&family=Archivo+Black&display=swap');


    * {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        background-color: rgb(243, 239, 238);
    }

    nav {
        background-color: rgb(243, 239, 238);
        margin-top: 0.5vh;
        margin-left: 4vh;
        margin-right: 4vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Alata', sans-serif;
    }

    nav img, #auth {
        height: 4.5vh;
        width: auto;
    }

    #auth li {
        padding: 1vh;
    }

    #auth button {
        font-size: 1.5vh;
    }

    nav ul {
        
        list-style: none;
        display: flex;
    
    }

    a {
        text-decoration: none;
        color: rgb(56, 56, 56);
    }

    #links li {
        margin-left: 7vh;
        transition: all 0.3s;
    }

    #links li:hover {
        transform: scale(1.2);
    }

    .btn-marron {
        color: white;
        background-color: rgb(73, 30, 18);
        font-family: 'Alata', sans-serif;
        cursor: pointer;
        height: 4vh;
        width: 10vh;
        border-radius: 50vh;
        border: none;
    }
</style>