<template lang="pug">
  v-container(align-center="true")
    v-layout
      v-spacer
      v-flex
        v-content
          v-layout(align-center column)
            v-flex
              v-btn(color="orange").elevation-80
                .login-btn sign in with Facebook
            v-flex
              v-btn(color="yellow")
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
</style>
