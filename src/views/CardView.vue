<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                v-card(class="mx-auto" height="100%" @click="isHover")
                    v-img(:src="cardImg" height="100%" )
                            div(v-if="flag" class ="grey darken-4" style="height: 100%" ).transparent
                                v-chip(v-for="hashtag in hashtags" label color= "yellow darken-3" text-color="white").chip-transparent
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
                hashtags: [],
                cardID: undefined,
                card: [],
                cardImg: "",
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
            this.card = await this.$api.readHashtagByCardID(this.cardID);
            this.hashtags = this.card.hashtags;
            this.cardImg = await this.$storage.getUrl(`image/card/${this.cardID}`);
        }
    }
</script>

<style scoped lang="sass">
    .transparent
        opacity: 0.65
        .chip-transparent
            opacity: 100
</style>