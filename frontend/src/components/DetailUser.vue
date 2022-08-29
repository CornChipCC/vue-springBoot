<template>
    <div>
        <h1>{{user.name}} : {{user.phone}}</h1>
        <h2>나이 : {{user.age}}</h2>
    </div>
</template>

<script>
export default {
  name: 'DetailUser',
  data () {
    return {
      user: {}
    }
  },
  created () {
    var id = this.$route.params.id
    this.$http.get(`/api/users/${id}`).then(resp => {
      this.user = resp.data.response
    })
  }
}
</script>

<style scoped>
</style>
