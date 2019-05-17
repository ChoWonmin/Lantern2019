<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12 sm6 offset-sm3)
                .back
                    v-img(src="https://cdn.vuetifyjs.com/images/parallax/material.jpg").backimg
                .profile
                    v-avatar(size="120px").avatar-wrapper
                        v-img(:src="require('../assets/profile01.jpg')" alt="Avatar")
                .detail
                    v-text.name.title {{user.name}}
                    v-text.age &nbsp;( {{user.age}} , {{user.sex}} )<br>
                    v-text.lang
                        v-icon(small) language
                        v-text(v-for="n in user.lang.length" ) {{user.lang[n]}}
                .lantern-switch-wrapper
                    .lantern-switch
                        v-switch(v-model="isLantern" color="yellow darken-3" @change="onOffLantern()")
                    .lantern-text(v-bind:class="{active: isLantern}") {{getLanternText}}


                v-card
                    v-container(grid-list-sm fluid).pa-0
                        v-layout(row wrap)
                            v-flex(v-for="n in cardCount" xs4 d-flex)
                                v-card(flat tile class="d-flex")
                                    v-img(:src="require('../assets/profile01.jpg')" lazy-src="require('../assets/default-image.jpg')" aspect-ratio="1" class="grey lighten-2")
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
                userID: "",
                user: {},
                cards: [],
                cardCount: 9,
                isLantern: false
            }
        },
        async mounted() {
            this.userID = this.$route.params.id;
            this.userID = "HAnana@gmail.com";
            this.user = await this.$api.readUser(this.userID);
            //this.cards = await this.$api.readCardsByUserID(this.userID);
           // this.cardCount = this.cards.length;
            this.isLantern = this.user.isLantern;
        },
        methods: {
            onOffLantern() {
                //if()
                //this.$api.onOffLantern()
            }
        },
        computed: {
            getLanternText() {
                return this.isLantern?'You are a lantern!':'Show my card and become a lantern';
            }
        }
    }
</script>

<style scoped lang="sass">
    .back
        height: 200px
        .backimg
            height: 100%
            opacity: 0.7
    .profile
        position: relative
        width: 100%
        height: 70px
        .avatar-wrapper
            position: absolute
            left: calc(50% - 60px)
            top: -60px
            z-index: 100
    .detail
        height: 130px
        text-align: center
        .age.lang
            font-weight: 300

    .lantern-switch-wrapper
        //background-color: #ffb300
        height: 60px
        display: flex
        padding-left: 20px
        padding-right: 20px
        .lantern-switch
            flex: 1
            align-items: center
            max-width: 50px
        .lantern-text
            height: 100%
            width: 100%
            line-height: 60px
            text-align: center
            font-weight: normal
            font-size: medium
            color: #757575
            &.active
                color: #ffb300

</style>