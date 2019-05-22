<template lang="pug">
    v-content
        v-content.list-header
            .list-header-text {{title}}
        v-content(v-show="open").lantern-list
            v-card(v-for="(lantern, index) in items" v-if="listCount>index")
                v-layout(row wrap).lantern-content
                    v-flex(align-self-center xs4)
                        v-img(v-if="index===0" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-05-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.05.03.png?alt=media&token=fc43b04d-6cf1-4f2a-a1b7-0ef4f80f1f52'" )
                        v-img(v-if="index===1" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-05-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.06.31.png?alt=media&token=0df21a1f-207a-4f7e-8049-5e98d2e56c7b'" )
                        v-img(v-if="index===2" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2FJun94%40gmail.com?alt=media&token=441de634-6f2f-4adc-b1b0-31393bf0b954'" )
                        v-img(v-if="index===3" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-05-20%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.05.41.png?alt=media&token=a351c6ae-a8ab-4123-a608-84367c0105bd'" )
                    v-flex(xs8)
                        v-card-title
                            v-layout(column)
                                .headline.name {{lantern.name}}
                                div.body-2.font-weight-regular
                                    .infomation {{`( ${lantern.age}, ${lantern.sex} )`}}
                                v-layout
                                    v-icon(small) language
                                    div.caption {{lantern.lang.join(' ')}}
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
                tmp: ''
            };
        },
        methods: {
            openList(){
                this.listCount += 10;
            },
            async getProfileUrl(email) {
                return await this.$storage.getUrl(`image/user/${email}`);
            }
        },
        async mounted() {
            this.tmp = await this.$storage.getUrl(`image/user/Sonny@gmail.com`);
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

