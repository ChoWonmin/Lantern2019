<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout
      v-flex(xs12)
        ListViewer(title="나와 가장 잘 맞는 랜턴" :items="list")
        ListViewer(title="내가 좋아요한 카드" :items="list")
        ListViewer(title="내가 좋아요한 카드" :items="list")
</template>

<script>
import ListViewer from '../components/ListViewer';

export default {
  components: {
    ListViewer
  },

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
          }

      ],
      isOpen: false
    }
  }
}
</script>
