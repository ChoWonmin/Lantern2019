<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout
      v-flex(xs12)
        v-content
          v-card(v-for="lantern in list")
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
