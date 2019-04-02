<template lang="pug">
  v-container(align-center="true")
    v-layout
      v-spacer
      v-flex
        v-content
          v-layout(align-center column)
            v-flex
              v-btn(color="#3b5998").font-weight-bold
                .login-btn sign in with Facebook
            v-flex
              v-btn(color="#dd4b39").font-weight-bold
                .login-btn sign in with Google
      v-spacer
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
};
</script>

<style scoped lang="sass">
.login-btn
  width: 240px
  color: #efefef
</style>
