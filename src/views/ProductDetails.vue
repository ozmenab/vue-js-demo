<template>
    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4">
                    <div class="card" style="border-radius: 15px;">
                        <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                            data-mdb-ripple-color="light">
                            <img v-bind:src="`${product[0].img}`"
                                style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
                                alt="Laptop" />
                            <a href="#!">
                                <div class="mask"></div>
                            </a>
                        </div>
                        <div class="card-body pb-0">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p><a href="#!" class="text-dark">{{ product[0].Title }}</a></p>
                                    <p class="small text-muted">Laptops</p>
                                </div>
                                <div>
                                    <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                    <p class="small text-muted">Rated 4.0/5</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="text">{{ product[0].Description }}</div>
                        </div>
                        <hr class="my-0" />
                        <div class="card-body pb-0">
                            <div class="d-flex justify-content-between">
                                <p><a href="#!" class="text-dark">${{ product[0].price }}</a></p>
                            </div>
                            <p class="small text-muted">VISA Platinum</p>
                        </div>
                        <hr class="my-0" />
                        <hr class="my-0" />
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                                <a href="#!" class="text-dark fw-bold" v-on:click="goHomePage">Cancel</a>
                                <button type="button" class="btn btn-primary" v-on:click="handleAddToCart(product[0])">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- <div class="row mt-2">
        <div class="col col-lg-4 col-md-6 col-sm-6 col-12 mt-2 mb-2">
            <div class="card" style="width: 100%; height:120%;">

                <img class="card-img-top" v-bind:src="`${p.img}`" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ p.Title }}</h5><br />
                    <p class="card-text"></p>
                    {{_product.Title}}
                    <div class="card-body">
                        <a href="#" 
                            class="btn btn-sm btn-success position-absolute bottom-0 end-0 m-2">Add to Cart</a>
                        <span class="float-right text-secondary position-absolute bottom-0 start-1 m-2">{{p.price}} $</span>
                    </div>

                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    beforeCreate() {
        this.$store.dispatch("getOneProduct", this.$route.params.id);
    },
    created() {

    },
    computed: {
        ...mapGetters({
            product: "_product"
        }),
    },
    methods: {
        goHomePage(){
            this.$router.push("/")
        },
        handleAddToCart(product){
            this.$store.dispatch("addToCart", product);
            this.$router.push("/Cart");
        }
    }
}
</script>