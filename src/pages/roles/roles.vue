<template>
  <div>
    <h1>roles roles roles</h1>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'roles'
}
</script>

<style lang="scss"></style>
