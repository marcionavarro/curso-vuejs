<template>
  <v-app-bar color="primary" style="z-index: 1000;">
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)" />
    <v-app-bar-title>{{ title || 'Dashboard' }}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>
