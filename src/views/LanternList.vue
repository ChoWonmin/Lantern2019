<template lang="pug">
  v-container(align-center fill-height fluid style="overflow-y: scroll;")
    v-layout
      v-flex(xs12)
        ListViewer(title="나와 가장 잘 맞는 랜턴" :items="list1")
        CardListViewer(title="해시태그 기반 카드" :items="list2")
        ListViewer(title="지역 별 인기 랜턴" :items="list3")
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
    this.list3.push({
      name:"Dahye Kim",
      sex: "female",
      lang:["kor", "eng"],
      age: 26,
      src:require('../assets/pprofile1.jpg')
    });
    this.list3.push({
      name:"SeungMin Woo",
      sex: "male",
      lang:["kor", "eng"],
      age: 25,
      src:require('../assets/pprofile2.jpg')
    });
    this.list3.push({
      name:"Linda Lee",
      sex: "female",
      lang:["kor", "eng"],
      age: 22,
      src:require('../assets/pprofile3.jpg')
    });


    this.uid = this.$user.email;
    this.uid = "0108257@gmail.com";
    const tempArr = await this.$api.readCFListByUserID(this.uid);

    // console.warn('피어슨 기반 정렬된 추천리스트', tempArr);

    for (let i = 0; i < tempArr.length; i++) {
      const tmp = await this.$api.readUser(tempArr[i].id);
      tmp.src = await this.$storage.getUrl(`image/user/${tempArr[i].id}`);
      this.list1.push(tmp);
    }

    this.list1.push({
      name:"Linda Lee",
      sex: "female",
      lang:["kor", "eng"],
      age: 22,
      src:require('../assets/lp1.jpg')
    });

    this.list1.push({
      name:"da Lee",
      sex: "female",
      lang:["kor", "eng"],
      age: 22,
      src:require('../assets/lp2.jpg')
    });

    this.list1.push({
      name:"Bab Kim",
      sex: "female",
      lang:["kor", "eng"],
      age: 22,
      src:require('../assets/lp3.jpg')
    });

    this.list1.push({
      name:"miyoung Kim",
      sex: "female",
      lang:["kor", "eng"],
      age: 22,
      src:require('../assets/lp4.jpg')
    });



  }
}
</script>

