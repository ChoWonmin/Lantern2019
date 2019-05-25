<template lang="pug">
    v-container(align-center fill-height fluid style="overflow-y: scroll;")
        v-layout
            v-flex(xs12)
                ListViewer(title="나와 가장 잘 맞는 랜턴" :items="list1")
                CardListViewer(title="해시태그 기반 카드" :items="list1")
                ListViewer(title="지역 별 인기 랜턴" :items="list2")
</template>

<script>
    import ListViewer from '../components/ListViewer';
    import CardListViewer from '../components/CardListViewer';

    export default {
        components: {
            ListViewer, CardListViewer
        },
        data() {
            return {
                list1: [],
                list2: [],
                list3: [],
                isOpen: false,
                uid: ""
            }
        },
        async mounted() {
            this.uid = this.$user.email;
            await this.$api.readCFListByUserID("uid");


            this.list2.push(await this.$api.readUser("jae0101@gmail.com"));
            this.list2.push(await this.$api.readUser("HAnana@gmail.com"));
            this.list2.push(await this.$api.readUser("Sonny@gmail.com"));
            this.list2.push(await this.$api.readUser("Jun94@gmail.com"));

            this.list1.push(await this.$api.readUser("Sonny@gmail.com"));
            this.list1.push(await this.$api.readUser("jae0101@gmail.com"));
            this.list1.push(await this.$api.readUser("Jun94@gmail.com"));
            this.list1.push(await this.$api.readUser("HAnana@gmail.com"));



        }
    }
</script>

