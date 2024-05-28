<template>
  <v-app-bar color="primary" style="z-index: 1000;">
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)"></v-app-bar-nav-icon>
    <v-app-bar-title>Dashboard</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  }
}
</script>
