<template>
  <v-col>
    <v-row justify="start">
    <v-col cols="12" sm="8" md="6">
      <h1> Rules - View All </h1>
    </v-col>
    </v-row>
    <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <h2 class="text-center"> Welcome to Search and Stay </h2>
      <p class="text-center"> Start adding rules </p>
    </v-col>
  </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      rules: [],
  }
  },
  methods: {
    async getRules() {
      let res = await this.$store.dispatch("getRules");
      this.rules = res.data.data.entities;
    }
  },
  mounted() {
    this.getRules()
  }
}
</script>
