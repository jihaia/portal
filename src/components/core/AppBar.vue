<template>
  <v-toolbar fixed dense dark class="blue darken-1">
    <v-toolbar-side-icon @click.native.stop="toggleNavigator"></v-toolbar-side-icon>
    <v-toolbar-title>Administration</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="amber white--text hidden-md-and-down">
      Full Name
    </v-btn>
    <v-btn icon @click.native.stop="toggleChooser">
      <v-icon>apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'app-bar',
    methods: {
      ...mapActions([
        'toggleNavigator',
        'toggleChooser'
      ])
    }
  }
</script>
