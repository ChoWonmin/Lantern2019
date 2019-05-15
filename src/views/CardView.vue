<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                v-img(:src="require('../assets/profile01.jpg')" height="100%")
                v-chip(label color= "yellow darken-3" text-color="white")
                    v-icon(left) label
                    div.subheading.font-weight-bold Tags

</template>

<script>
    import Header from '../components/Header';
    export default {
        components: {
            Header
        },

        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="sass">
    .tag-text

</style>


