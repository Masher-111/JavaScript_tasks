Vue.component('components-new', {
    props: ['id', 'tag', 'title', 'firstParagraph', 'secondParagraph', 'subtitle', 'subtitleText' ],

    data() {
        return {

            
        }
    },

    template: `<div>
    <h1>{{title}}</h1>
    <p>{{firstParagraph}}</p>
    <p>{{secondParagraph}}</p>
    <h2>{{subtitle}}</h2>
    <p>{{subtitleText}}</p>
    <div>{{tag}}</div>
    </div>`,



});

