<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout

</template>

<script>

    export default {
        components: {

        },
        data() {
            return {
                userID: "",
                user: {},
                profileImg: '',
                cards: [],
                isLantern: false,
                cardImages: []
            }
        },
        async mounted() {
            this.userID = this.$route.params.id;
            //this.userID = 'DASH@gmail.com';
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style scoped lang="sass">


</style>