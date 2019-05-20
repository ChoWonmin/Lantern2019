<template lang="pug">
    v-content
        v-content.list-header
            .list-header-text {{title}}
        v-content.card-list
            v-layout(row).scrolling-wrapper
                v-card.card
                    v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FQEKiWYSHLQ0Yza8a0cb7?alt=media&token=95b48b9f-45ed-4ac1-a6e4-0ff88a103fca'" width="140px")
                v-card.card
                    v-img(:src="require('../assets/profile01.jpg')" width="140px")
                v-card.card
                    v-img(:src="require('../assets/profile01.jpg')" width="140px")
                v-card.card
                    v-img(:src="require('../assets/profile01.jpg')" width="140px")
                v-card.card
                    v-img(:src="require('../assets/profile01.jpg')" width="140px")
                v-card.card
                    v-img(:src="require('../assets/profile01.jpg')" width="140px")
            <!--v-card-->
                <!--v-container(fluid grid-list-md )-->
                    <!--v-layout(row wrap v-vuse-scrollbar:x)-->
                        <!--v-flex(v-for="card in 10")-->
                            <!--v-card-->
                                <!--v-img(:src="require('../assets/profile01.jpg')" min-width="80")-->


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
    .card-list
        .scrolling-wrapper
            overflow-x: scroll
            overflow-y: hidden

</style>

