<template>
    <div>第二个view</div>
</template>

<script>
  export default {
    name: "TestTwo",
    created(){
      sessionStorage.setItem('hashFriend', '/testTwo');
    }
  }
</script>

<style scoped>

</style>
