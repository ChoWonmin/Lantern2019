<template lang="pug">
    v-content
        v-content.list-header
            .list-header-text {{title}}
        v-content.card-list
            v-layout(row).scrolling-wrapper
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FQEKiWYSHLQ0Yza8a0cb7?alt=media&token=95b48b9f-45ed-4ac1-a6e4-0ff88a103fca'" width="140px" height="200px")-->
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FM8AmytMlQWv56Jsqi7r8?alt=media&token=9a44fce3-048f-4c2c-a5d6-4b2e82ad220e'" width="140px" height="200px")-->
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FQjRCm5y0ZUrMSppRwWd8?alt=media&token=c142cb29-6678-4469-82d8-f6c37461988d'" width="140px" height="200px")-->
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2F38W5jpoBNEgusHrlBx2j?alt=media&token=43dab08b-657c-4c89-b075-a362472eb67d'" width="140px" height="200px")-->
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FREYy6yPrZgmPDF0G5exK?alt=media&token=076e2127-4b71-4aa1-ab1a-6a86a4809a8b'" width="140px" height="200px")-->
                <!--v-card.card-->
                    <!--v-img(:src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fcard%2FmHYBnx4NDnu9f1cR3kp5?alt=media&token=912b079c-68f2-401e-88b4-6e2d4b254d43'" width="140px" height="200px")-->

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


