<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                v-chip(label color="pink" text-color="white") Tags
                    v-icon(left) label
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
