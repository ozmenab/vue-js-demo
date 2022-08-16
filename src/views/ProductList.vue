
<template>
    <section v-for="product in _searchList" style="background-color: #eee;">
        <div class="container py-1">
            <div class="row justify-content-center mb-3">
                <div class="col-md-12 col-xl-10">
                    <div class="card shadow-0 border rounded-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img v-bind:src="`${product.img}`" class="w-100" />
                                        <a href="#!">
                                            <div class="hover-overlay">
                                                <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);">
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6">
                                    <h5>{{ product.Title }}</h5>
                                    <p class="text-truncate mb-4 mb-md-0">
                                        {{ product.Description }}
                                    </p>
                                </div>
                                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                    <div class="d-flex flex-row align-items-center mb-1">
                                        <h4 class="mb-1 me-1">${{ product.price }}</h4>
                                    </div>
                                    <h6 class="text-success">Free shipping</h6>
                                    <div class="d-flex flex-column mt-4">
                                        <button class="btn btn-primary btn-sm" type="button"
                                            v-on:click="goToDetails(product.id)">Details</button>
                                        <button v-on:click="handleAddToCart(product)"
                                            class="btn btn-outline-primary btn-sm mt-2" type="button">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
import { mapGetters } from 'vuex'


export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["_productList", "_searchList"]),
    },
    methods: {
        handleAddToCart(product) {
            this.$store.dispatch("addToCart", product);
        },
        goToDetails(id) {
            this.$router.push(`/productDetails/${id}`);
        }
    },


}
</script>

<style>
img {
    height: 60%;
}
</style>