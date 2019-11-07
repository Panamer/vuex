<template>
  <div>这是一个新页面呀！！
      {{ this.$route.params.success }}
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(`this.$route.params.success--${JSON.stringify(this.$route.params)}`)
    }
}
</script>
    
<style>

</style>