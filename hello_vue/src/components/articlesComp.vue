<template>
    <div>

        <div class="articles" >
            <article class="article"  v-for="article in articles" :key="article.id">
                <h1 class="article_title">{{article.title}}</h1>
                <img class="article_img" :src="require(`../assets/${article.img}`)" alt="">
                <p class="article_text">{{ article.text }}</p>
                <div class="article_quote">
                    <p class="quote_symbol">“</p>
                    <p class="quote_text">The details are not the details. They make the design.</p>
                </div>
                <h1 class="article_title">{{ article.subtitle }}</h1>
                <p class="article_text">{{ article.subText }}</p>
                <div class="article_tag">{{ article.tag }}</div>
            </article>
        </div>
    </div>
    
</template>


<script>
export default {
    name: 'ArticlesComp',

    data() {
        return {
 
            articles: [
                {
                    id: 1,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'article_img.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    subtitle: 'Design sprints are great',
                    subText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tag: 'Kitchen'

                },
                {
                    id: 2,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'article_img.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    subtitle: 'Design sprints are great',
                    subText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tag: 'Bedroom'

                },
                {
                    id: 3,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'article_img.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    subtitle: 'Design sprints are great',
                    subText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tag: 'Building'

                },
                {
                    id: 5,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'article_img.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    subtitle: 'Design sprints are great',
                    subText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tag: 'Architecture'

                },
                {
                    id: 6,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'article_img.jpg',
                    text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    subtitle: 'Design sprints are great',
                    subText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    tag: 'Kitchen Planing'

                },
                

                
            ],

            quote: ''
        };
    },

    mounted() {
        
    },

    methods: {
    
    },
};
</script>

<style lang="css" scoped>

*{
    padding: 0;
    margin: 0;
}

.articles{
    width: 800px;
}
    .article_title{
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(41, 47, 54, 1);
        padding-bottom: 21px;


    }

    .article_img{
        width: 800px;
        height: 540px;
        border-radius: 50px;
    }

    .article_text{
        padding-bottom: 50px;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: rgba(77, 80, 83, 1);

    }

    .article_quote{
        margin-bottom: 30px;
        margin-top: 10px;
        width: 800px;
        height: 270px;
        border-radius: 50px;
        background-color: rgba(244, 240, 236, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .quote_symbol{
        height: 100px;
        font-size: 200px;
        font-style: italic;
        font-weight: 400;
        line-height: 250px;
        letter-spacing: 0.02em;
        text-align: center;
        color: rgba(205, 162, 116, 1)
    }

    .quote_text{
        width: 360px;
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: center;
        color: rgba(205, 162, 116, 1)
    }

    .article_tag{
        width: 132px;
        height: 41px;
        line-height: 42px;
        color: white;
        background: rgba(41, 47, 54, 1);
        width: 132px;
        height: 41px;
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        gap: 10px;
    }

    .sidebar {
    width: 345px;
    display: inline-block;
    overflow: hidden;
    display: inline-table;
    }
    .sidebar_title {
        height: fit-content;
    }


    .sidebar_radio {
        display: inline-block;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        height: fit-content;
        width: fit-content;
        padding: 10px;
    }

    .sidebar input[type=radio] {
        display: none;
    }

    .sidebar label {
        width: 132px;
        height: 41px;
        cursor: pointer;
        line-height: 42px;
        background: rgba(244, 240, 236, 1);
        width: 132px;
        height: 41px;
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        gap: 10px;

    }

    .sidebar input[type=radio]:checked+label {
        color: white;
        background: rgba(41, 47, 54, 1);
    }

    .sidebar label:hover {
        color: white;
        background: rgba(41, 47, 54, 1);

    }




</style>