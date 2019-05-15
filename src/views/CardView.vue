<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                v-img(:src="require('../assets/profile01.jpg')" height="100%")
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
                cardID: undefined
            }
        },
        async mounted() {
            this.cardID = this.$route.params.cardID;
            this.hashtags = await this.$api.readHashtagByCardID();
        }
    }
</script>

<style scoped lang="sass">

</style>