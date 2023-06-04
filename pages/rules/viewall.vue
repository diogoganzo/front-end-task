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
    <v-data-table
      :headers="headers"
      :items="rules"
      :options.sync="options"
      :server-items-length="totalRules"
      :loading="loading"
      :items-per-page="10"
      disable-pagination
      :footer-props="{
        'items-per-page-options': [10],
        'disable-items-per-page': true,
      }"
      class="elevation-1"
    >
      <template #footer.prepend>
        <v-spacer />
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="primary" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    headers: [
      { text: "ID", value: "id", sortable: false },
      {
        text: "Rule",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Active", value: "active", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    totalRules: 0,
    desserts: [],
    loading: true,
    options: {},
    deleteRule: null,
    dialogDelete: false,
    rules: [],
  }),

  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    async getDataFromApi() {
      this.loading = true;
      let res = await this.$store.dispatch("getRules", this.options.page);
      this.rules = res.data.data.entities;
      this.totalRules = res.data.data.pagination.total;
      this.loading = false;
    },
    deleteItem(item) {
      this.deleteRule = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch("deleteRule", this.deleteRule.id);
      this.closeDelete();
      this.getDataFromApi();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
  },
};
</script>
