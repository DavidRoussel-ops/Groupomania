<template>
  <a :href="url">{{ text }}</a>
</template>

<script>
export default {
  name : 'Homepage',
  props : ['url', 'text']
}
</script>

<style>
  a {
    text-decoration: none;
    margin-right: 10px;
  }
</style>