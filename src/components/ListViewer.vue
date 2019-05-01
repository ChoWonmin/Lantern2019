<template lang="pug">
  v-content
    v-content.list-header
      .list-header-text {{title}}
    v-content(v-show="open").lantern-list
      v-card(v-for="(lantern, index) in items" v-if="listCount>index")
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
    v-content
        v-icon.icon-more(style="outline" @click="openList()") keyboard_arrow_down
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
        listCount: 2
    };
  },
  methods: {
      openList(){
          this.listCount += 10;
      }
  }
};
</script>

<style scoped lang="sass">
.list-header
    height: 30px
    font-size: small
    font-weight: bold
    align-content: center
    background: #EEEEEE
    .list-header-text
        height: 100%
        line-height: 30px
        text-indent: 10px

.icon-more
    height: 30px
    display: flex
    justify-content: center
    background: white

</style>
