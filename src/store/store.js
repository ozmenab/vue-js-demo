import { createStore } from "vuex";
import data from '../../data/data';

const store = createStore({
    state: {
        productList: data,
        cartItems: [],
        searchList: data,
        product: {}
    },
    getters: {
        _productList: state => state.productList,
        _cartItems: state => state.cartItems,
        _searchList: state => state.searchList,
        _product: state => state.product
    },
    // Async
    actions: {
        addToCart(context, payload) {
            context.commit("addToCart", payload);
        },
        searchList(context, payload) {
            context.commit("searchList", payload);
        },
        getOneProduct(context,payload){
            context.commit("getOneProduct",payload)
        }
    },
    // Not Async
    mutations: {
        addToCart(state, payload) {
            state.cartItems.push(payload);
        },
        searchList(state, payload) {
            state.searchList = state.productList.filter((product) => product.Title.toLowerCase().includes(payload.toLowerCase()));
        },
        getOneProduct(state,payload){
            state.product=state.productList.filter((product)=> product.id==payload)
        }
    }
});

export default store;