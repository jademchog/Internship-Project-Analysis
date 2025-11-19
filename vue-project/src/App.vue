<template>
  <h1>Hello WORLD!!!</h1>
  <p>This should contain a message: {{ message }} </p>
  <div class="cat-boxes">
    <i-eat-planes/>
    <i-eat-planes/>
    <i-eat-planes/>
    <i-eat-planes/>
    <i-eat-planes/>
    <i-eat-planes/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: 'your mom'
    }
  }
}
</script>


<style>
.cat-boxes{
  display: flex;
  flex-wrap: wrap;
}
</style>
