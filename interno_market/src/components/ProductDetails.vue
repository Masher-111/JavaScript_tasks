<template>
    <div class="product_details">
        <h1 class="product_title">{{ product.name }}</h1>
        <h3 class="product_price">{{ formattedPrice }}</h3>
        <p class="available" v-if="product.availability">Available</p>
        <p class="disable" v-else>Out of stock</p>
        
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {
                name: "Table",
                price: 99.99,
                availability: true
            }
        };
    },

 
    computed: {
        formattedPrice(){
            return  `$${this.product.price}`;
        }
    }
};
</script>

<style lang="css" scoped>
.product_details{
    width: 350px;
    height: 200px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(194, 198, 206);
    border: 1px solid blueviolet;
    border-radius: 10px;
}

.available{
    color: rgb(6, 151, 6);
}

.disable{
    color:rgb(238, 15, 15);
}


</style>