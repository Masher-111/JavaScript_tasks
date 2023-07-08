<template>
    <header class="header">
        <LogoComp/>
        <NavigationList/>
    </header>        
</template>

<script>
import LogoComp from './LogoComp.vue';
import NavigationList from './NavigationList.vue';
export default {
    name: "HeaderComp",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { LogoComp, NavigationList }
};
</script>

<style lang="css" scoped>
.header {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
    height: 50px;
    width: 1200px;
    padding-top: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}


</style>