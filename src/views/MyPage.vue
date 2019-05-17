<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12 sm6 offset-sm3)
                v-card
                    v-img(src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" max-height="300")
                    v-card-text
                v-card
                    v-container(grid-list-sm fluid).pa-0
                        v-layout(row wrap)
                            v-flex(v-for="n in cardCount" xs4 d-flex)
                                v-card(flat tile class="d-flex")
                                    <!--v-img(:src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"-->
                                    <!--aspect-ratio="1" class="grey lighten-2")-->
                                    v-img(:src="require('../assets/profile01.jpg')" lazy-src="require('../assets/default_image.jpg')" aspect-ratio="1" class="grey lighten-2")
                                        v-layout(fill-height align-center justify-center ma-0)





</template>

<script>

    import Header from '../components/Header';
    export default {
        components: {
            Header
        },
        data() {
            return {
                id: "",
                cards: [],
                cardCount: 0
            }
        },
        async mounted() {
            this.id = this.$route.params.id;
            this.cards = await this.$api.readCardByLanternID(this.id);
            this.cardCount = this.cards.length;
        }
    }
</script>

<style scoped lang="sass">

</style>