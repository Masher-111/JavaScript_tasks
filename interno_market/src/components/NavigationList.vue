<template>
    <div  :style="styleHeaderLink">
      <a  class="header__menu_link" v-for="link in navLinks" :key="link.id" :href="link.href" >
        {{ link.name }}
     </a>  
    </div>
</template>

<script>
export default {
    name: 'NavigationList',

    data() {
        return {
            styleHeaderLink:{
                listStyleType: 'none',
                width: '243px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
      

            navLinks: [
                {   
                    id:1,
                    name: 'Home',
                    href: '/index.html',
                },
                {
                    id:2,
                    name: 'Project',
                    href: '#',
                },  
                {
                    id:3,
                    name: 'Blog',
                    href: '#',
                },
            ]
        };
    },


};
</script>

<style lang="css" scope>
    .header__menu_link {
        font-family: 'Jost',sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: #000;

    }

    a {
        text-decoration: none;
    }
</style>