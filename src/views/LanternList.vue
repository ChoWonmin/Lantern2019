<template lang="pug">
  v-container(align-center)
    v-layout
      v-spacer
      v-flex
        v-content
          v-card(v-for="lantern in list")
            v-layout
              v-flex(align-self-center xs3)
                v-icon face
                <!--v-img(:src="require('../assets/logo.png')")-->
              v-flex(xs8)
                v-layout
                  .name {{lantern.name}}
                  .infomation {{`(${lantern.age}, ${lantern.sex})`}}
                v-layout
                  v-icon(small) info
                  .keywords {{lantern.keywords.join(' ')}}
              v-flex(xs1)
                v-icon home
      v-spacer

</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male'
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male'
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male'
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male'
        }
      ]
    }
  }
}
</script>
