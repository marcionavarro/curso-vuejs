<template>
  <v-app-bar color="primary" style="z-index: 1000;">
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)" />
    <v-app-bar-title>{{ title || 'Dashboard' }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn icon @click="showLogoutDialog = true">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar-items>

    <v-dialog v-model="showLogoutDialog" max-width="300px">
      <v-card>
        <v-card-title>
          <h3 class="subheading">Deseja realmente sair ?</h3>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text small @click="showLogoutDialog = false">Não</v-btn>
          <v-btn text small @click="logout">Sim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
import apollo, { onLogout } from '@/plugins/apollo'

export default {
  name: 'AppToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  },
  data: () => ({
    showLogoutDialog: false
  }),
  computed: {
    ...mapState(['title'])
  },
  methods: {
    async logout (e) {
      this.$router.push('/login')
      await onLogout(apollo)
    }
  }
}
</script>
