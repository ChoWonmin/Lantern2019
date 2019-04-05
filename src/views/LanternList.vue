<template lang="pug">
  v-container(align-center)
    v-layout
      v-flex(xs12)
        v-content
          v-card(v-for="lantern in list")
            v-layout
              v-flex(align-self-center xs6)
                v-img(:src="require('../assets/profile01.jpg')" :height="180" )
              v-flex(xs6)
                v-layout
                  .name {{lantern.name}}
                v-layout
                  v-icon(small) info
                  .keywords {{lantern.keywords.join(' ')}}
              v-flex(xs1)
                v-icon home
                  .infomation {{`${lantern.age}, ${lantern.sex}`}}
                v-layout
                  v-icon(small) language
                  .keywords {{lantern.language.join(' ')}}
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
          sex: 'male',
          language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        },
        {
          photo: '',
          name: 'wonmin',
          age: 26,
          keywords: ['soccer', 'soju', 'computer'],
          sex: 'male',
            language: ['Korean', 'English']
        }
      ]
    }
  }
}
</script>
