<template>
    <v-col>
      <v-row justify="start">
        <v-col cols="12" sm="8" md="6">
          <h1>Rules - View All</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <h2 class="text-center">Welcome to Search and Stay</h2>
        </v-col>
      </v-row>
    </v-col>
</template>
<script>
export default {
  name: "IndexPage",
  data: () => ({
  }),
  methods: {
    async getDataFromUrl() {
      console.log(this.$route);
    },
  },
  mounted(){
    this.getDataFromUrl()
  }
};
</script>