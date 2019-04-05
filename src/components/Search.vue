<template lang="pug">
    v-layout
      v-autocomplete(box background-color = "white" full-width :items="states" placeholder ="지역을 입력하세요" item-text="name" label="location")
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
