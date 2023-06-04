export const actions = {
    async getRules(state, page) {
      let res = await this.$axios.get(`/house_rules?page=${page}`)
      return res;
    },
    async deleteRule(state, id) {
      let res = await this.$axios.delete(`/house_rules/${id}`)
      return res;
    },
    async getRule(state, id) {
        let res = await this.$axios.get(`/house_rules/${id}`)
        return res;
      },
      async saveRule(state, rule) {
        let res = await this.$axios.post(`/house_rules`, rule)
        return res;
      },
      async editRule(state, rule) {
        console.log(rule);
        let res = await this.$axios.put(`/house_rules/${rule.house_rules.id}`, rule)
        return res;
      }
  }