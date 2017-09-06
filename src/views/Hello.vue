<template>
  <v-tabs dark>
    <v-toolbar class="blue" extended dark>
      <h5 class="mt-3 ml-3">Hello Page</h5>
      <v-tabs-bar class="blue" slot="extension">
        <v-tabs-slider class="white"></v-tabs-slider>
        <v-tabs-item
          v-for="(item, i) in items"
          :key="i"
          :href="'#tab-' + (i + 1)"
        >
          {{ item }}
        </v-tabs-item>
        <v-menu :nudge-width="100" left bottom>
          <v-tabs-item slot="activator">
            Menu
            <v-icon>arrow_drop_down</v-icon>
          </v-tabs-item>
          <v-list class="grey lighten-3">
            <v-list-tile
              tag="a"
              v-for="n in 4"
              :key="n"
              @click=""
            >
              Item {{ n }}
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tabs-bar>
    </v-toolbar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 5"
        :key="i"
        :id="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Micro App',
      items: [
        'web', 'shopping', 'videos', 'images', 'news'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>
</style>
