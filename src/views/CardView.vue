<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                v-card(class="mx-auto" height="100%" @click="isHover")
                    v-img(:src="require('../assets/profile01.jpg')" height="100%" )
                            div(v-if="flag" class ="grey darken-4" style="height: 100%" ).transparent
                                v-chip(v-for="hashtag in hashtags" label color= "yellow darken-3" text-color="white")
                                    v-icon(left) label
                                    div.subheading.font-weight-bold {{hashtag}}


</template>

<script>
    import Header from '../components/Header';
    export default {
        components: {
            Header
        },
        data() {
            return {
                hashtags: ["a", "b", "c", "d", "e", "g", "h"],
                cardID: undefined,
                flag: false
            }
        },
        methods: {
            async isHover() {
                this.flag = !this.flag;
            },
        },
        async mounted() {
            this.cardID = this.$route.params.cardID;
            this.hashtags = await this.$api.readHashtagByCardID();
        }
    }
</script>

<style scoped lang="sass">
    .transparent
        opacity: 0.65
</style>