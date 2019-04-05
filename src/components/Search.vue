<template lang="pug">
    v-content
        v-layout
        v-flex.xs12
        //v-text-field(label="Solo" placeholder="현재위치" solo)
        v-autocomplete.offset-xs12( :box = "true" background-color = "white" :full-width = "true" :items="states" :placeholder ="'지역을 입력하세요'")
            template v-slot:append-outer
                v-slide-x-reverse-transition(mode="out-in")
</template>

<script>


    export default {
        data() {
            return {
                isEditing: false,
                model: null,
                states: [
                    'Seoul, Republic of Korea', 'Osaka, Japan', 'Tokyo, Japan', 'Barcelona, Spain',
                    'Taipei, Taiwan', 'Jeju, Republic of Korea', 'London, UK'
                ]};
        },
        methods: {
        }
    };
</script>

<style scoped lang="sass">

</style>
