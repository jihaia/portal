<template>
  <v-navigation-drawer
      persistent
      v-model="visibility"
      light
      @input="trackChange"
    >
    <v-toolbar dense class="transparent mb-4" flat>
      <v-toolbar-title class="">Branding</v-toolbar-title>
    </v-toolbar>

    <!-- CATEGORY ONE (start) -->
    <v-list dense>
      <v-subheader>Category One</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Item One</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY ONE (end) -->

    <hr class="divider">

    <!-- CATEGORY TWO (start) -->
    <v-list dense>
      <v-subheader>Category Two</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Item One</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Item Two</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY TWO (end) -->

    <hr class="divider">

    <!-- CATEGORY THREE (start) -->
    <v-list dense>
      <v-subheader>Category Three</v-subheader>
      <v-list-tile v-for="sample in samples" :key="sample['.key']" href="#">
        <v-list-tile-action>
          <v-icon primary>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{sample.name}} - {{sample.email}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY THREE (end) -->

    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { db } from '../../firebase'

  var samplesRef = db.ref('samples')
  // samplesRef.push({name: 'Peter Pan', email: 'ppan@neverland.net'})

  export default {
    name: 'navigator',
    firebase: {
      samples: samplesRef
    },
    methods: {
      ...mapActions([
        'closeNavigator'
      ]),
      trackChange (e) {
        if (this.navigatorVisible === true && e === false) {
          this.closeNavigator()
        }
      }
    },
    computed: {
      ...mapGetters({
        navigatorVisible: 'navigatorVisible'
      }),
      visibility: {
        get () {
          return this.navigatorVisible
        },
        set () {

        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>
