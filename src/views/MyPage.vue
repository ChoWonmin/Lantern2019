<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12 sm6 offset-sm3)
                .back
                    v-img(src="https://cdn.vuetifyjs.com/images/parallax/material.jpg").backimg
                .profile
                    v-avatar(size="120px").avatar-wrapper
                        v-img(:src="profileImg" alt="Avatar")
                .detail
                    .name-age
                        v-text.name.title {{user.name}}
                        v-text.age.title &nbsp;( {{user.age}} , {{user.sex}} )<br>
                    .region
                        v-icon(small) location_on
                        v-text &nbsp; {{user.region}}<br>
                    .lang
                        v-icon(small) language
                        v-text &nbsp; {{user.lang.join('  ')}}
                .lantern-switch-wrapper
                    .lantern-switch
                        v-switch(v-model="isLantern" color="yellow darken-3" @change="onOffLantern()")
                    .lantern-text(v-bind:class="{active: isLantern}") {{getLanternText}}


                v-card.cards-wrapper
                    v-container(grid-list-sm fluid).pa-0
                        v-layout(row wrap)
                            v-flex(v-for="card in cardArray" xs4 d-flex)
                                v-card(flat tile class="d-flex" @click="$router.push({name:'cardView', params: {cardID: card.cardID}})")
                                    v-img(:src="card.cardSrc" aspect-ratio="1" class="grey lighten-2")
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
                profileImg: '',
                cards: [],
                isLantern: false,
                cardArray: []
            }
        },
        async mounted() {
            this.userID = this.$route.params.id;
            this.userID = 'DASH@gmail.com';
            this.user = await this.$api.readUser(this.userID);
            this.profileImg = await this.$storage.getUrl(`image/user/${this.userID}`);
            this.cards = await this.$api.readCardsByUserID(this.userID);
            this.cards.forEach(async (e)=>{
               this.cardArray.push({
                   cardSrc: await this.$storage.getUrl(`image/card/${e.id}`),
                   cardID: e.id
               });
            });

            this.isLantern = this.user.isLantern;
        },
        methods: {
            onOffLantern() {
                this.$api.onOffLantern(this.isLantern);
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
        height: 110px
        text-align: center
        .name-age
            padding-top: 10px
            padding-bottom: 10px
        .region
            padding-bottom: 10px
            font-weight: 400
            color: grey
        .lang
            padding-bottom: 10px
            font-weight: 400
            color: grey


    .lantern-switch-wrapper
        background-color: #e0e0e0
        height: 60px
        display: flex
        padding-left: 30px
        padding-right: 30px
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
                font-size: 25px

    .cards-wrapper
        padding-top: 20px

</style>