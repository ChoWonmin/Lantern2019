<template lang="pug">
  v-content
    v-content.list-header
      .list-header-text {{title}}
    v-content(v-show="open").lantern-list
      v-card(v-for="lantern in items")
        v-layout(row wrap)
          v-flex(align-self-center xs6)
            v-img(:src="require('../assets/profile01.jpg')" height="180")
          v-flex(xs6)
            v-card-title
              v-layout(column)
                .headline.name {{lantern.name}}
                div.font-weight-light.body-2
                  .infomation {{`( ${lantern.age}, ${lantern.sex} )`}}
                v-layout
                  v-icon(small) language
                  div.font-weight-light.font-italic.caption
                    .keywords {{lantern.language.join(' ')}}
                v-layout
                  v-icon(small color = "yellow") star
                  div 4.5
                    //.rating {{lantern.rating}}
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
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="sass">

</style>
