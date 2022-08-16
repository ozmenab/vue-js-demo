<template>
    <nav class="navbar navbar-expand-lg  bg-light">
        <div class="container-fluid">
            <img class="navbar-brand" src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15"
                alt="MDB Logo" loading="lazy" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                </ul>
                <a class="text-reset me-3" href="#">
                    <i class="bi bi-cart-fill" v-on:click="navigateCart"><span v-if="_cartItems.length > 0" class="badge rounded-pill badge-notification bg-danger">{{
                            _cartItems.length
                    }}</span></i>
                    
                </a>
                <form class="d-flex">
                    <input v-model="search" v-on:keydown="searchList" v-on:click="searchList" class="form-control me-2"
                        placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapGetters(["_cartItems", "_productList", "_searchList"])
    },
    methods: {
        searchList() {
            this.$store.dispatch("searchList", this.search)
        },
        goToHomePage() {
            this.$router.push("/")
        },
        navigateCart(){
            this.$router.push("/cart");
        }
    }

}
</script>
<style>
.rounded-circle {
    height: 10%;
}
</style>