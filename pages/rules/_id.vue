<template>
  <v-col>
    <v-row justify="start">
      <v-col cols="12" sm="8" md="6">
        <h1>Rules - {{ editing ? "Edit Rule" : "Create Rule" }}</h1>
      </v-col>
    </v-row>
    <div v-if="rule.id || !editing || loading">
      <v-skeleton-loader
        v-if="loading"
        v-bind="attrs"
        type="article, actions"
      ></v-skeleton-loader>
      <v-form v-else ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-if="editing"
          v-model="rule.id"
          :rules="nameRules"
          label="id"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="rule.name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-checkbox
          v-model="rule.active"
          v-bind:true-value="1"
          v-bind:false-value="0"
          label="Active"
        ></v-checkbox>
        <v-row justify="center">
          <v-btn class="mr-4" to="viewall"> Cancel </v-btn>

          <v-btn
            :disabled="!valid"
            @click="submit()"
            color="primary"
            class="mr-4"
          >
            Confirm
          </v-btn>
        </v-row>
      </v-form>
    </div>
    <div v-else>
      <v-alert border="top" colored-border type="info" elevation="2">
        Rule not found
      </v-alert>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "IndexPage",
  data: () => ({
    rule: { active: true },
    valid: false,
    loading: false,
    editing: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    async getRuleFromUrl() {
      let ruleId = this.$route.params.id;
      if (ruleId == "new") {
        return;
      }
      this.editing = true;
      this.loading = true;
      let res = await this.$store.dispatch("getRule", ruleId);
      this.loading = false;
      if (res.data) {
        this.rule = res.data.data;
      }
    },
    async submit() {
      if (this.editing) {
        await this.$store.dispatch("editRule", {
          house_rules: {
            ...this.rule,
          },
        });
      } else {
        await this.$store.dispatch("saveRule", {
          house_rules: {
            ...this.rule,
          },
        });
      }
      this.$router.push(`viewAll`);
    },
  },
  mounted() {
    console.log("mounted");
    this.getRuleFromUrl();
  },
};
</script>
