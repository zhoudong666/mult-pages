<template>
  <div>
    <h1>firstPage</h1>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'firstPage'
}
</script>

<style lang="scss"></style>
