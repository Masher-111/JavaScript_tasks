<template>
    <div class="product">
        <div >
            <h1>Список товаров</h1>
            <div class="product_menu">
                <div v-for="product in products" :key="product.id">
                    <img :src="product.productImg" alt="product.productName" width="250px">
                    <h2>{{product.productName}}</h2>
                    <h3>{{product.productPrice}} руб.</h3>
                </div>
            </div>
        </div>
        <div class="btn_block">
            <button class="btn" @click="sortUp(products)">Сортировать по убыванию</button>
        <button class="btn" @click="sortDown(products)">Сортировать по возрастанию</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'SortingComp',

    data() {
        return {
            products: [{
                    productName: 'Американо',
                    productImg: 'https://images.unsplash.com/photo-1685122121700-5abd72a3389e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    productPrice: 100,
                }, {
                    productName: 'кофе Фраппе ',
                    productImg: 'https://images.unsplash.com/photo-1684548856346-041e1a90d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    productPrice: 140
                }, {
                    productName: 'Шоколадный коктейль',
                    productImg: 'https://images.unsplash.com/photo-1684151093347-2304cda70839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    productPrice: 120
                }, {
                    productName: 'Авторский кофе',
                    productImg: 'https://images.unsplash.com/photo-1661615204063-a8a38cd919df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
                    productPrice: 250
                }, {
                    productName: 'Кофе со льдом',
                    productImg: 'https://images.unsplash.com/photo-1675092809664-0040f37e6836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    productPrice: 170
                }]
        };
    },

    mounted() {
        
    },

    methods: {
        sortUp(products) {
                    return products.sort((a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice));
                },
        sortDown(products) {
                    return products.sort((a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice));
                }
    },
};
</script>

<style lang="css" scoped>

    .product{
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: bisque;
    }
   .product_menu {
        display: flex;
        flex-direction: row;
         gap: 20px;
    }
 
    .btn_block{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }
    .btn {
        width: 170px;
        height: 70px;
        font-weight: bold;
        font-size: 20px;
        font-family: "Josefin Sans", sans-serif;
        background-color: #fdcb6e;
        cursor: pointer;
        box-shadow: 5px 5px 0 0;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 20px;
    }

    .btn::after {
        content: "";
        top: 0;
        left: 0;
        width: 170px;
        height: 70px;
        opacity: 0;
        transition: 0.3s;
    }
    .btn:hover {
        box-shadow: -5px -5px 0 0;
        transform: scale(0.9);
        background-color: rgb(240, 136, 136);
    }
    .btn:hover::after {
        opacity: 1;
    }
</style>