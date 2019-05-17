<template lang="pug">
  v-content
    v-content.list-header
      .list-header-text {{title}}
    v-content(v-show="open").lantern-list
      v-card(v-for="(lantern, index) in items" v-if="listCount>index")
        v-layout(row wrap).lantern-content
          v-flex(align-self-center xs4)
            v-img(v-if="index===0" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2FSonny%40gmail.com.jpg?alt=media&token=05f20e22-e08e-4648-8976-f95936456959'" )
            v-img(v-if="index===1" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2Fjae0101%40gmail.com?alt=media&token=1db7a1bb-1ff6-467b-bfb1-ba95a99e4916'" )
            v-img(v-if="index===2" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2FJun94%40gmail.com?alt=media&token=441de634-6f2f-4adc-b1b0-31393bf0b954'" )
            v-img(v-if="index===3" :src="'https://firebasestorage.googleapis.com/v0/b/lantern2019-607ba.appspot.com/o/image%2Fuser%2F%E3%85%81%E3%84%B4%E3%85%87%E3%84%B9.jpg?alt=media&token=dfb3cda1-41e5-4fb5-a67f-af58ad4f3163'" )
          v-flex(xs8)
            v-card-title
              v-layout(column)
                .headline.name {{lantern.name}}
                div.font-weight-light.body-2
                  .infomation {{`( ${lantern.age}, ${lantern.sex} )`}}
                v-layout
                  v-icon(small) language
                  div.font-weight-light.font-italic.caption {{lantern.lang.join(' ')}}
                    .keywords
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
.lantern-list
    .lantern-content
        max-height: 150px
.icon-more
    height: 30px
    display: flex
    justify-content: center
    background: white

</style>
