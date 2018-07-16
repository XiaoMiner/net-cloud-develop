<template>
    <div>第一个view</div>
</template>

<script>
  export default {
    name: "TestOne",
    created(){
      sessionStorage.setItem('hashFriend', '/testOne');
    }
  }
</script>

<style scoped>

</style>
