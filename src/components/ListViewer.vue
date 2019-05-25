<template lang="pug">
    v-content
        v-content.list-header
            .list-header-text {{title}}
        v-content(v-show="open").lantern-list
            v-card(v-for="(item,index) in items" v-if="listCount>index")
                v-layout(row wrap).lantern-content
                    v-flex(align-self-center xs4)
                        v-img(:src="item.src")
                    v-flex(xs8)
                        v-card-title
                            v-layout(column)
                                .headline.name {{item.name}}
                                div.body-2.font-weight-regular
                                    .infomation {{`( ${item.age}, ${item.sex} )`}}
                                v-layout
                                    v-icon(small) language
                                    div.caption {{item.lang.join(' ')}}
                                        .keywords
                                v-layout
                                    v-icon(small color = "yellow") star
                                    div 4.5
                                        //.rating {{lantern.rating}}
        v-content
            v-icon.icon-more(style="outline" @click="openList()") keyboard_arrow_down
</template>

<script>
    export default {
        props:{
            title: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            open: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                listCount: 2,
                arrWithimages: []
            };
        },
        methods: {
            openList(){
                this.listCount += 5;
            }
        },
        async mounted() {
            // console.error(this.items, 'item');
            //
            // this.items.forEach(async (e)=>{
            //     console.error(e);
            //     this.arrWithimages.push({
            //         lantern: e,
            //         profileSrc: await this.$storage.getUrl(`image/user/${e.email}`)
            //     });
            // });
            // console.log(this.arrWithimages, "arrWithimages");
        }
    };
</script>

<style scoped lang="sass">
    .list-header
        height: 40px
        font-size: small
        font-weight: bold
        align-content: center
        background: #EEEEEE
        .list-header-text
            height: 100%
            line-height: 40px
            text-indent: 10px
    .lantern-list
        .lantern-content
            max-height: 150px
    .icon-more
        height: 30px
        display: flex
        justify-content: center
        background: white

</style>

